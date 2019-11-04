<template>
  <div class="user">

     <el-table :data="tableData">
        <el-table-column prop="firstName" label="First Nama" width="140">
        </el-table-column>
        <el-table-column prop="lastName" label="Last Name" width="120">
        </el-table-column>
        <el-table-column prop="email" label="Email">
        </el-table-column>
    </el-table>
        
  </div>
</template>

<script>
import axios from 'axios'
export default {

    data() {
        return {
            tableData: []
        };
    },
    
    created(){
        this.getUsers()

    },

    methods: {
        getUsers: async function() {
            const { 

                data: { users }

            } = await axios.get('http://localhost:4000/api/v1/users');

            this.tableData = users;
        }
    }

};
</script>
