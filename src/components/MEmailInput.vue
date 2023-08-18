<script setup>
import { computed, ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputRef = ref(null);

const isShowSolid = ref(false);

const isSelect = ref(false);

onClickOutside(inputRef, (event) => {
  isShowSolid.value = false;
});

const mailSuffix = computed(() => {
  if (!props.options.suffix) return [];
  return props.options.suffix.map((suffix) => {
    const emailName = props.modelValue.split("@")[0];
    return emailName + suffix;
  });
});

const updateValue = (value) => {
  emit("update:modelValue", value);
};

const onFocus = () => {
  isShowSolid.value = props.modelValue.length !== 0;
};

const selectMail = (mail) => {
  isSelect.value = true;
  isShowSolid.value = false;
  updateValue(mail);
  setTimeout(() => {
    isSelect.value = false;
  }, 300);
};

watch(
  () => props.modelValue,
  () => {
    if (isSelect.value) return;
    isShowSolid.value = props.modelValue.length !== 0;
  }
);
</script>

<template>
  <div relative w-full h-30px>
    <input
      ref="inputRef"
      w-full
      h-full
      pl-10px
      :value="modelValue"
      border="1px gray-4 solid"
      @input="updateValue($event.target.value)"
      @focus="onFocus"
    />
    <ul
      v-if="isShowSolid"
      absolute
      top-30px
      left-0
      bg-white
      w-full
      h-auto
      border="0px x-1px gray-4 solid"
    >
      <li
        v-for="main in mailSuffix"
        :key="main"
        border="0px b-1px gray-4 solid"
      >
        <a
          cursor-pointer
          w-full
          block
          py-5px
          pl-10px
          text-14px
          hover:bg-gray-1
          @click="selectMail(main)"
        >
          {{ main }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
