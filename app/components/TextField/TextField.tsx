import styles from "./text-field.module.css"

interface Props {
  id: string
  labelContent: string
  labelFor: string
  name: string
  placeholder: string
}

export default function TextField({ labelFor, labelContent, placeholder, name, id }: Props) {
  return (
    <>
      <label className={styles.textFieldLabel} htmlFor={labelFor}>
        {labelContent}
      </label>
      <input className={styles.textFieldInput} type="text" name={name} id={id} placeholder={placeholder} />
    </>
  )
}
