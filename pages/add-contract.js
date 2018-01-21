// import Page from '../components/Page'
import AddContract from '../components/add-contract/AddContract'
import { AuthPage } from '../components/Page'

const AddContractPage = AuthPage(props => <AddContract client={props.client} />)

export default AddContractPage
