<template>
  <!-- main-->
  <div class="flex-box main-wrap">
    <div>
      <p>study template</p>
      <p>subtitle</p>
      <div>
        <el-button>btn1</el-button>
        <el-button>btn2</el-button>
        <el-button>btn3</el-button>
      </div>
    </div>
    <div class="flex-box">
      <div>
        <p>drop1</p>
        <el-select v-model="dropValue" @change="change">
          <el-option
            v-for="item in list1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            {{ item.label }}
          </el-option>
        </el-select>
      </div>
      <!-- <div>
        <p>drop2</p>
        <el-select>
          <el-option v-for="item in list1" :key="item.value">{{
            item.label
          }}</el-option>
        </el-select>
      </div>
      <div>
        <p>drop3</p>
        <el-select>
          <el-option v-for="item in list1" :key="item.value">{{
            item.label
          }}</el-option>
        </el-select>
      </div>
      <div>
        <p>drop4</p>
        <el-select>
          <el-option v-for="item in list1" :key="item.value">{{
            item.label
          }}</el-option>
        </el-select>
      </div> -->
      <block />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Block from './block.vue'
export default {
  components: { Block },
  data() {
    return {
      list1: [
        {
          label: '1111',
          value: '11111'
        },
        {
          label: '2222',
          value: '22222'
        }
      ],
      dropValue: '1111'
    }
  },
  methods: {
    ...mapActions('page1', ['setParamsQuery']),
    change(value) {
      this.setParamsQuery({ name: value })
    }
  }
}
</script>

<style lang="scss" scoped>
  .flex-box {
    display: flex;
  }

  .main-wrap {
    justify-content: space-around;
    padding: 20px;
    border-bottom: 1px solid #ccc;
  }
</style>
