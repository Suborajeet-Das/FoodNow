import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  splashScreenContainer: {
    backgroundColor: "#102E50",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  splashScreenLogo: {
    width: 130,
    height: 130,
  },
  primaryButtonContainer: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: "55%",
  },
  primaryButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 0,
  },
  primaryButtonText: {
    color: "white",
    fontWeight: 600,
    fontSize: 16,
  },
  yourRoleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  dropDownContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  
  pickerWrapper: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#041C4D",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  
  dropDownIcon: {
    marginRight: 10,
  },
  homeCustomerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  homeCustomerContent: {
    backgroundColor: 'white',
    marginBottom: 40,
    padding: 20,

  },
  navBar: {
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  navBarTitle: {
     color: 'black',
     fontSize: 18,
     flex: 1,
     textAlign: 'center',
     fontWeight: 'bold',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
  },
  searchBar: {
    //for any changes inside the searchBarContainer
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  currentCanteenDashboard: {
    width: "100%",
    backgroundColor: '#102E50',
    borderRadius: 20,
    height: 120,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  currentCanteenDashboardText: {
    color: 'white',
  },
  header: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subHeading: {
    fontWeight:'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  itemContainer: {
    width: 120,
    marginRight: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 30,
  },
  itemImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#eaeaea',
  },
  itemName: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
    color: 'grey',
  },
  itemPrice: {
    fontSize: 12,
    fontWeight: '700',
    color: '#102E50',
  },
});

export default css;
