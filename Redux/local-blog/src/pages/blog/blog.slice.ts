import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../types/blog.type'
import { initialPostList } from '../../constants/blog'
import { v4 as uuidv4 } from 'uuid'
interface BlogState {
  postList: Post[]
  editingPost: Post | null
}
const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}

const blogSlice = createSlice({
  name: 'blog', //prefix of action type
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1)
      }
    },
    startEditingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    },
    cancelEditingPost: (state) => {
      state.editingPost = null
    },
    finishEditingPost: (state, action: PayloadAction<Post>) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    },
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        const post = action.payload
        state.postList.push(post)
      },
      prepare: (post: Omit<Post, 'id'>) => ({
        payload: {
          ...post,
          id: uuidv4()
        }
      })
    }
  }
})

export const { addPost, finishEditingPost, startEditingPost, deletePost, cancelEditingPost } = blogSlice.actions
export default blogSlice.reducer
