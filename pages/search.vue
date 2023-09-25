<script setup>
import { getBooksByKeywordApi } from "@/apis/book";
import { onMounted, ref, watch } from "vue";

const router = useRoute();

const books = ref([]);

const handleSearch = async () => {
  if (!router.query.q) books.value = [];
  else
    try {
      const { data } = await getBooksByKeywordApi(router.query.q);
      books.value = data;
    } catch (error) {
      // handle error
    }
};

watch(() => router.query.q, handleSearch);

onMounted(handleSearch);
</script>

<template>
  <div class="my-12">
    <p v-if="router.query.q" class="text-3xl">
      Kết quả: Có {{ books.length }} sản phẩm chứa từ khóa "{{
        router.query.q
      }}"
    </p>
    <p v-else class="text-3xl">Hãy nhập từ khóa để tìm kiếm</p>
    <BookList :list="books" />
  </div>
</template>
