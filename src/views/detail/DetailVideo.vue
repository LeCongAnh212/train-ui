<template>
  <div class="relative">
    <div class="custom-spacing flex-col gap-4 xs:hidden md:flex">
      <p>Development / Mobile Engineer</p>
      <legend class="text-3xl font-bold">{{ video.title }}</legend>
      <div class="mb-8 flex items-center gap-4">
        <p class="text-lg text-[#C5322A]">{{ video.author }}</p>
        <p>
          <i class="fa-solid fa-star text-yellow-300"></i>
          <b class="mx-1">{{ video.rate }}</b>
          <span class="text-[#1B1B1B99]">({{ video.review }} ratings) </span>
        </p>
      </div>
    </div>
    <!-- xs:absolute md:relative xs:left-0 -->
    <div class="md:custom-spacing w-full xs:block xs:p-0 lg:hidden">
      <div
        class="relative mb-10 overflow-hidden xs:rounded-none md:rounded-[3rem]"
      >
        <img
          :src="video.image"
          alt=""
          class="aspect-video w-full object-cover"
        />
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-[#1B1B1B80] hover:bg-[#1B1B1B99] xs:flex xs:h-20 xs:w-20 xs:items-center xs:justify-center xs:rounded-full md:rounded-2xl md:p-8 2xl:rounded-[2.2rem] 2xl:p-12"
        >
          <i
            class="fa-solid fa-play ms-2 xs:text-3xl xs:text-red-600 md:text-4xl md:text-primary 2xl:text-6xl"
          ></i>
        </div>
        <div
          @click="goBack()"
          class="absolute left-5 top-5 h-10 w-10 items-center justify-center rounded-full hover:bg-[#1B1B1B99] xs:flex md:hidden"
        >
          <i class="fa-solid fa-arrow-left font-sm text-2xl text-white"></i>
        </div>
      </div>
    </div>

    <div class="custom-spacing mb-8 xs:block md:hidden">
      <legend class="text-3xl font-bold">{{ video.title }}</legend>
      <p class="text-lg text-primary">{{ video.author }}</p>
      <div class="mt-4 flex items-center justify-between">
        <div class="flex flex-col">
          <p class="mb-1 text-xl font-medium">US$22.40</p>
          <p>
            <span class="me-2 text-[#575757c8]">$30.13</span>
            <span
              class="rounded-xs w-fit rounded-md bg-purple-500 p-1 font-semibold text-white"
            >
              20%
            </span>
          </p>
        </div>
        <div class="flex flex-col text-end">
          <p class="mb-1 text-xl">
            <i class="fa-solid fa-star text-yellow-300"></i>
            <b class="mx-1 font-medium">{{ video.rate }}</b>
          </p>
          <span class="text-[#1B1B1B99]">({{ video.review }} ratings) </span>
        </div>
      </div>
    </div>

    <div class="custom-spacing flex gap-5">
      <div class="flex flex-[2] flex-col gap-6">
        <div
          class="relative w-full overflow-hidden rounded-[3rem] xs:hidden lg:block"
        >
          <img
            :src="video.image"
            alt=""
            class="aspect-video w-full object-cover"
          />
          <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-[#1B1B1B80] hover:bg-[#1B1B1B99] md:rounded-2xl md:p-8 2xl:rounded-[2.2rem] 2xl:p-12"
          >
            <i
              class="fa-solid fa-play ms-2 text-primary md:text-4xl 2xl:text-6xl"
            ></i>
          </div>
        </div>

        <div class="flex gap-6 border-b-2">
          <div
            @click="option = item"
            v-for="item in options"
            :key="item"
            class="-mb-[2px] py-1 text-xl font-medium capitalize"
            :class="
              option == item
                ? 'border-b-2 xs:border-primary md:border-orange-700'
                : ''
            "
          >
            {{ item }}
          </div>
        </div>

        <p class="-mb-2 text-2xl font-bold max-md:hidden">About Course</p>

        <p class="max-md:hidden">
          Vue (pronounced /vjuː/, like view) is a progressive framework for
          building user interfaces. Unlike other monolithic frameworks, Vue is
          designed from the ground up to be incrementally adoptable. The core
          library is focused on the view layer only, and is easy to pick up and
          integrate with other libraries or existing projects. On the other
          hand, Vue is also perfectly capable of powering sophisticated
          Single-Page Applications when used in combination with modern tooling
          and supporting libraries.
        </p>

        <p class="-mb-2 text-2xl font-bold max-md:hidden">Review</p>

        <div v-for="item in reviews" :key="item.id">
          <ReviewComponent :review="item" />
        </div>
      </div>
      <div class="flex-1 flex-col xs:hidden md:flex">
        <div class="flex flex-col gap-4 bg-white p-4 py-8 shadow-md">
          <div class="flex-col gap-4 xs:hidden lg:flex">
            <p>
              <span class="text-2xl font-bold">US$22.40</span>
              <span class="text ms-3 text-xl text-[#1B1B1B99] line-through"
                >$30.13</span
              >
            </p>

            <div
              class="rounded-xs w-fit bg-purple-500 p-1 font-semibold text-white"
            >
              20% OFF
            </div>

            <BaseButtonComponent class="bg-primary py-3">
              Buy
            </BaseButtonComponent>
            <BaseButtonComponent
              class="border border-black bg-transparent py-3 !text-gray-600 hover:border-primary hover:bg-primary hover:!text-white"
            >
              <p class="">
                <i class="fa-regular fa-heart"></i>
                Wishlist
              </p>
            </BaseButtonComponent>
          </div>

          <p class="font-medium text-gray-500">
            <i class="fa-regular fa-rectangle-list me-3"></i>
            <span>22 Section</span>
          </p>
          <p class="font-medium text-gray-500">
            <i class="fa-solid fa-book-open-reader me-3"></i>
            <span>152 Lectures</span>
          </p>
          <p class="font-medium text-gray-500">
            <i class="fa-solid fa-tv me-3"></i>
            <span>21h 33m total lenghts</span>
          </p>
          <p class="font-medium text-gray-500">
            <i class="fa-solid fa-volume-high me-3"></i>
            <span>English</span>
          </p>
        </div>
        <div class="relative mt-4 w-full flex-grow overflow-hidden rounded-2xl">
          <div class="h-full w-full">
            <img
              src="https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629_640.jpg"
              class="h-full w-full object-cover"
              alt=""
            />
          </div>
          <z></z>
          <div
            class="absolute left-0 top-0 flex h-full w-full flex-col gap-4 px-6 py-8 text-white"
          >
            <div class="w-fit bg-primary p-1 text-xs font-semibold text-white">
              WEBINAR
            </div>
            <p class="text-xl text-gray-200">Ana Kursova</p>
            <p class="font-bold xs:text-2xl lg:text-4xl">
              Masterclass in Design Thinking, Innovation & Creativity
            </p>
            <button
              class="rounded-xs w-fit border border-yellow-400 px-4 py-1 font-semibold text-yellow-300 hover:bg-yellow-300 hover:text-white"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="custom-spacing ms-[13rem] mt-10 flex items-center gap-20 max-md:hidden"
    >
      <select class="xs:hidden lg:block" name="" id="">
        <option value="">Browse</option>
      </select>
      <button
        class="rounded-xs border border-black px-4 py-1 font-semibold hover:border-primary hover:bg-primary hover:text-white"
      >
        Load more review
      </button>
    </div>
  </div>

  <div class="max-md:hidden md:mt-12 lg:mt-20">
    <PromoComponent />
  </div>

  <div class="custom-spacing mt-12 xs:flex lg:hidden">
    <div class="flex-1 flex-col xs:hidden md:flex">
      <p>
        <span class="text-2xl font-bold">US$22.40</span>
        <span class="text ms-3 text-xl text-[#1B1B1B99] line-through"
          >$30.13</span
        >
      </p>

      <div class="rounded-xs w-fit bg-purple-500 p-1 font-semibold text-white">
        20% OFF
      </div>
    </div>
    <div class="flex flex-1 flex-row-reverse justify-between gap-4">
      <BaseButtonComponent class="h-fit flex-1 bg-primary py-3">
        Buy
      </BaseButtonComponent>
      <BaseButtonComponent
        class="h-fit flex-1 border border-black bg-transparent py-3 !text-gray-600 hover:border-primary hover:bg-primary hover:!text-white"
      >
        <p class="">
          <i class="fa-regular fa-heart"></i>
          Wishlist
        </p>
      </BaseButtonComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, getCurrentInstance } from "vue";
import ReviewComponent from "../../components/review/ReviewComponent.vue";
import BaseButtonComponent from "@/components/button/BaseButtonComponent.vue";
import PromoComponent from "@/components/PromoComponent.vue";
import router from "@/router/index";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const app = getCurrentInstance();
const emitter = app.appContext.config.globalProperties.emitter;
const route = useRoute();
const store = useStore();
const options = reactive(["Description", "Courses", "Review"]);
const option = ref(options[0]);
const reviews = reactive([
  {
    id: 1,
    name: "Leonardo  Da Vinci",
    content:
      "Loved the course. I've learned some very subtle tecniques, expecially on leaves.",
    avatar:
      "https://s3-alpha-sig.figma.com/img/6fb1/2dd9/4761d0b747352f178c49faa623d741c6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDbQozfjFIaQmvBzwWaS6eSw8iIC61KWMqgb7pNgLJ9QmuOQknGvKdGWTryAEeCmZ7~8ku-8Lv5laDBSAPxn-6MJY8zsSGmqVMgNVm62j3T9DqGeNtK8pmm4dnLL4rRRGoqGqw4kvCc~rw7Z-9CIaCGFtzhJOcF9RBKd2GdpfZDez7W53cmgSFzqZtHLvExJLlYROCb~n6e80KG2x4lNcIJyv1KbjC4GVqO819QT-jBpFZOQEgi6sRTYHxgzbd3~HPixH6ggOPMrltydKVJLv-P8E~e6KoVIyKu0hZGiHD1aBrzB50DtrsLpFRQNrG2M0XRmZtn~C14Vi2Mnwy~46Q__",
  },
  {
    id: 2,
    name: "Lee Cong Anh",
    content:
      "I loved the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Kitani Studio.",
    avatar:
      "https://s3-alpha-sig.figma.com/img/292d/9ae2/d886fbea146ee2a35e563a3f0efad276?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WnYtfY4Lu3-9V-oIWTQOSjy7O92vvFPZ9BRYE-fwcjyXFOoGhCdb2RTcAy2gzksXIT8vHhHorbZ4T8hs0ic-MIsiPK6soD351CpwGQ~JLnRjVtBpRAxf2osw7eJxdbOSIUKBdMQ6PANPbNOZRBEtERv56prnda3ZH0888VeWQNNd7K~4tyiQQzLqOV25De8Ez~aYchqClDasdhkd9WB-2UipHwGtWJUkvR154U9Q3uCYq4m-NZZ9x2unGeTkK046llYTfDz4EZ6mDnyvDir-MjjsokJzsiXJUIw6KgLwCKGmdIcbUkw8I73rFRLLivxceNVkfV6Z8J3KOXnxZSPnOA__",
  },
  {
    id: 3,
    name: "Doraemon",
    content:
      "Yes. I just emphasize that the use of Photoshop, for non-users, becomes difficult to follow. What requires a course to master it. Safe and very didactic teacher.",
    avatar:
      "https://s3-alpha-sig.figma.com/img/6482/97a1/3c76bf8606e775a9aff03066e3b9e9b6?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z1wEIx~bkm949zhA-~DwnH2bNnH6NxorsZZc4X416cizec74ALXBYu~nBvmQCni0dScG~ILx8GnTKldvjugQw18hrhb2zwVvUabAkYeWl7ABcvqeYYLf4To23IXK7HnzYo35iASyQeOn0qwm4Hbo8j24JaHIcsd20d-qtAGMchr3AzEFGwqTqM3lmMCS8dOLa8QL~NkLIGYACcsVWPvYz0LZdSdx2iEGV0VcDkjRmnuXzkZC1TfFGbe~6xfPlnbAcMR953GSimnz1UKTeOvqntSiAv2t8~GaPnbUHdBG2EHH4WVP0oMM56GrbTHTE53~mC8BKagCm4pobhaNh5anSA__",
  },
  {
    id: 4,
    name: "Nobita",
    content:
      "I haven't finished the course yet, as I would like to have some feedback from the teacher, about the comments I shared on the forum 3 months ago, and I still haven't had any answer. I think the course is well structured, however the explanations and videos are very quick for beginners. However, it is good to go practicing.",
    avatar:
      "https://s3-alpha-sig.figma.com/img/960c/dd48/3c8d95585216ffe9d8c1a50708e30d5e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqXSR87QAyQKacDd~zpfPxd7qCb3Q9A0AxSdrfxvOM1qOiTkH~v5mVwlltpYGCeUUmf5ZnV9-s5Mhx1wye-RrZ4LcMNoaBIRq9ghpmmIHZ-5f2LZvvNYrhoeWOT6gOxJ~9GzyOnhdv5yRjomRAFxhOdFtt382GjA-Mg2kKhmyuq-4ncbR-oVsWrhPRQmSe5ETuknAp4r7PD1Bq3GDJRIAlXC9f7jfUQY5k4zlNg1aBfMR8n~HQNjCijzvxfU6cwGcYx5QETOxlgh2KgNeFCKylis116faWNcIf5Lfo4odWDtQylTJOVBv0~WNniBA1L1ARpWg4hWhACeYBqwpPb4JA__",
  },
]);

const video = computed(() =>
  store.getters.getListVideo.find((video) => video.id == route.params.id),
);
// const video = listVideo.value.find(video => video.id == route.params.id)

function goBack() {
  emitter.emit("toggleNavbar", true);
  router.go(-1);

}
</script>

<style></style>
