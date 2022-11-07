<template>
  <a v-bind:href="websiteURL">
    <q-img :width="width" :src="logo" />
  </a>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const props = defineProps({
  logoName: {
    type: String,
    required: true,
  },
  logoExtencion: {
    type: String,
    default: "png",
  },
  assetsPath: {
    type: String,
    required: true,
  },
  websitePath: {
    type: String,
    required: true,
  },
  websiteLocale: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "100%",
  },
});

const logoPath = ref(props.assetsPath);
const logoName = ref(props.logoName);
const logoColor = ref(["Origin"]);
const logoExtencion = ref("." + props.logoExtencion);
const websiteURL = ref(props.websitePath);

if (props.websiteLocale != "") {
  websiteURL.value = websiteURL.value + "/" + props.websiteLocale;
}

const logo = computed({
  get: () =>
    logoPath.value + logoName.value + logoColor.value + logoExtencion.value,
});

const dark = computed({ get: () => $q.dark.isActive });

if (!dark.value) {
  logoColor.value = "Invert";
}

watch(dark, (val) => {
  if (val) {
    logoColor.value = "Origin";
  } else {
    logoColor.value = "Invert";
  }
});
</script>
