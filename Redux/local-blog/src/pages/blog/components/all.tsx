///// Create Post

// this has a form to create a post and edit a post
import { useState, useEffect } from 'react'
import { finishEditingPost } from '../blog.slice'
const initialState: Post = {
  id: '',
  description: '',
  publishDate: '',
  published: false,
  title: '',
  featuredImage: ''
}

export default function CreatePost() {
  const [formData, setFormdata] = useState<Post>(initialState)
  const editingPost = useSelector((state: RootState) => state.blog.editingPost)
  const dispatch = useDispatch()

  // make sure to update the form when end user click Edit button
  useEffect(() => {
    setFormdata(editingPost || initialState)
  }, [editingPost])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.defaultPrevented()
    if (editingPost) {
      dispatch(finishEditingPost(formData))
    } else {
      const formDataWithId = { ...formData, id: new Date().toISOString() }
    }
  }
}
