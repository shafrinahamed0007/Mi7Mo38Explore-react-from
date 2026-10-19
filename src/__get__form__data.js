/**
 * 1. e.target.[name of the input field].value
 * 2. use form action and formData in the action handler. formData.get('name of the input field)
 * 3. controlled component. one per each field. useState on change of the field. useful to dynamically error
 * 3(other system): handle all controlled field on one state object const [formData, setFormData] = useState({
 * name: '',
 * password: '',
 * phne: '',
 * })
 * 
 * 4. uncontrolled using useRef
 * 
 * 5. Hooks Form
 * 
 * 
 */
