import { useState } from "react"

const useForm = (inicialState) => {

    const [form, setForm] = useState(inicialState)

const onChangeInputs = (event) => {
  const {name, value} = event.target
  setForm({...form, [name]: value})
}

const cleanInputs = () => {
    setForm(inicialState)
}

  return {form, onChangeInputs, cleanInputs}
}



export default useForm

