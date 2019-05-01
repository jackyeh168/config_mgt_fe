<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <!-- Aside content -->

        <el-menu default-active="2"
                 class="el-menu-vertical-demo">

          <template v-for="(project, rowIndex) in projects">
            <el-menu-item :key="rowIndex" :disabled="isUsed(project.ID)"
                          @click="changeProject(project.ID)">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ project.project_name }}</span>
            </el-menu-item>
          </template>

        </el-menu>

      </el-aside>
      <el-container>
        <el-header height="">
          <!-- Header content -->
          <span>Environment List</span>
        </el-header>
        <el-main height="">
          <!-- Main content -->
          <el-row>
            <el-card class="box-card">
              <div v-for="(el, rowIndex, index) in project_envs"
                   :key="rowIndex">
                <el-row class="row">
                  <el-col :span="2"><label>ENV Key</label></el-col>
                  <el-col :span="6">
                    <el-input v-model="el.env_key"></el-input>
                  </el-col>
                  <el-col :span="2"><label>ENV Value</label></el-col>
                  <el-col :span="8">
                    <el-input v-model="el.env_value"></el-input>
                  </el-col>
                  <el-col :span="6">
                    <el-checkbox v-model="el.is_secret">Is Secret</el-checkbox>
                    <el-button type="success"
                               @click="add">
                      <i class="el-icon-plus"></i>
                    </el-button>
                    <el-button type="danger"
                               @click="remove(rowIndex, index)">
                      <i class="el-icon-minus"></i>
                    </el-button>
                  </el-col>

                </el-row>
              </div>

            </el-card>
            <el-button type="primary"
                       @click="submit">Save</el-button>

          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import { getProject } from '@/api/project'
import { getProjectEnv, setProjectEnv } from '@/api/projectEnv'
async function init () {
  let res = {}

  let proj = await getProject()
  res.projects = proj.data.data

  if (res.projects.length > 0) {
    let projenv = await getProjectEnv(res.projects[0].ID)
    res.project_id = res.projects[0].ID
    res.project_envs = projenv.data.data
  }

  return res
}

async function switchProject (projectId) {
  let res = {}
  let projenv = await getProjectEnv(projectId)
  // res.project_id = projectId
  res.project_envs = projenv.data.data

  return res
}

export default {
  name: 'ProjectEnv',
  data () {
    return {
      projects: [],
      project_envs: [],
      project_id: 0
    }
  },
  methods: {
    add () {
      this.$data.project_envs.push({
        env_key: '',
        env_value: '',
        is_secret: false
      })
    },
    remove (key, index) {
      if (this.$data.project_envs.length <= 1) {
        return
      }
      this.$data.project_envs.splice(key, 1)
    },
    changeProject (projectId) {
      switchProject(projectId).then(obj => {
        this.$data.project_envs = obj.project_envs
        this.$data.project_id = projectId

        if (this.$data.project_envs < 1) {
          this.$data.project_envs.push({})
        }
      })
    },
    submit () {
      let data = this.$data.project_envs
      setProjectEnv(this.$data.project_id, data)
    },
    isUsed (projectId) {
      return parseInt(projectId) === parseInt(this.$data.project_id)
    }
  },
  created: function () {
    init().then(obj => {
      this.$data.projects = obj.projects
      this.$data.project_envs = obj.project_envs
      this.$data.project_id = obj.project_id
    })
    if (this.$data.projects < 1) {
      this.$data.project_envs.push({})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  padding-bottom: 20px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
