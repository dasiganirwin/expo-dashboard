import http from "../services/http-common";

const AddUser = () => {
    const initialUsersState = {
        email:"",
        user_name: "",
        first_name: "",
        last_name: "",
        company:"",
        position: "",
        company_address: ""
};

const [user, setUsers] = useState(initialUsersState);
const [add, setAdd] = useState(false);

const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };
  