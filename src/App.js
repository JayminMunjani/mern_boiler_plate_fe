import "./App.css";
import { gql, useQuery } from "@apollo/client";

function App() {
	const GET_USER = gql`
		query GetUser($getUserId: ID) {
			getUser(id: $getUserId) {
				id
				userName
				email
				password
				isVerified
			}
		}
	`;

	const { data, loading, error } = useQuery(GET_USER, {
		variables: {
			getUserId: null,
		},
	});

	return <div className="App">APp</div>;
}

export default App;
