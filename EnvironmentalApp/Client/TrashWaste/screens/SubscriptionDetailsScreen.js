import { View, Text } from 'react-native'
import React from 'react'

export default function SubscriptionDetailScreen() {
  return (
    <View>
      <Text>Subscription Detail</Text>
    </View>
  )
}
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const SubscriptionScreen = () => {
//   // Mock subscription data
//   const subscriptionDetails = {
//     plan_name: 'Premium Plan',
//     plan_type: 'Monthly',
//     start_date: '2023-12-01',
//     end_date: '2023-12-31',
//     status: 'Active',
//     user_id: '12345',
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Subscription Details</Text>
//       <View style={styles.detailsContainer}>
//         <Text style={styles.detailLabel}>Plan Name:</Text>
//         <Text style={styles.detailValue}>{subscriptionDetails.plan_name}</Text>
//       </View>
//       <View style={styles.detailsContainer}>
//         <Text style={styles.detailLabel}>Plan Type:</Text>
//         <Text style={styles.detailValue}>{subscriptionDetails.plan_type}</Text>
//       </View>
//       <View style={styles.detailsContainer}>
//         <Text style={styles.detailLabel}>Start Date:</Text>
//         <Text style={styles.detailValue}>{subscriptionDetails.start_date}</Text>
//       </View>
//       <View style={styles.detailsContainer}>
//         <Text style={styles.detailLabel}>End Date:</Text>
//         <Text style={styles.detailValue}>{subscriptionDetails.end_date}</Text>
//       </View>
//       <View style={styles.detailsContainer}>
//         <Text style={styles.detailLabel}>Status:</Text>
//         <Text style={styles.detailValue}>{subscriptionDetails.status}</Text>
//       </View>
//       <View style={styles.detailsContainer}>
//         <Text style={styles.detailLabel}>User ID:</Text>
//         <Text style={styles.detailValue}>{subscriptionDetails.user_id}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   detailsContainer: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   detailLabel: {
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   detailValue: {
//     fontSize: 16,
//     color: '#333',
//   },
// });

// export default SubscriptionScreen;
