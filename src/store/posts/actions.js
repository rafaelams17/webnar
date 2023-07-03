import { api } from 'src/boot/axios'

const setPosts = ({ commit }) => {
  return new Promise((resolve, reject) => {
    api.get('v2/posts')
      .then((suc) => {
        commit('SET_POSTS', suc.data)
        resolve(suc.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export { setPosts }
