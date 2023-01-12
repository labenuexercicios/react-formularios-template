import { useState } from "react"



export const useForm = (estadoInicial) => {

    const [form, setForm] = useState(estadoInicial)

    const onChangeForm = (event) => {
       
        const {value, name} = event.target
        
        const novoForm = {
          ...form,
          [name]:value
        }
        setForm(novoForm)
      }

      const limpar = () => {
        setForm(estadoInicial)
      }

      return [form, onChangeForm, limpar]
}