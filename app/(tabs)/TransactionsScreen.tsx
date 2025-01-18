import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Transaction {
  id: string;
  name: string;
  amount: number;
}

const PAGE_SIZE = 5;
const MAX_PAGE = 5;

const TransactionsScreen: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchTransactions = async (page: number): Promise<Transaction[]> => {
    console.log("Fetching transactions for page:", page);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const startIndex = (page - 1) * PAGE_SIZE;
    const data = Array.from({ length: PAGE_SIZE }, (_, i) => ({
      id: `${startIndex + i + 1}`,
      name: `Transaction ${startIndex + i + 1}`,
      amount: Math.floor(Math.random() * 1000),
    }));

    if (page > MAX_PAGE) return [];
    return data;
  };

  const loadTransactions = async (page: number) => {
    if (loading) return;
    setLoading(true);
    setPageLoading(true);

    try {
      const newTransactions = await fetchTransactions(page);
      if (newTransactions.length === 0) {
        setHasMore(false);
      } else {
        setTransactions(newTransactions);
      }
    } catch (error) {
      console.error("Error loading transactions:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setPageLoading(false), 500);
    }
  };

  useEffect(() => {
    loadTransactions(page);
  }, [page]);

  return (
    <View style={styles.container}>
      {pageLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="blue" />
          <Text style={styles.loadingText}>Loading Page {page}...</Text>
        </View>
      )}

      {!pageLoading && <Text style={styles.pageLabel}>Page {page}</Text>}

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.text}>ID: {item.id}</Text>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text style={styles.text}>Amount: ${item.amount}</Text>
          </View>
        )}
        ListEmptyComponent={
          !loading && transactions.length === 0 ? (
            <Text style={styles.text}>No transactions available.</Text>
          ) : null
        }
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" color="blue" /> : null
        }
      />

      <View style={styles.paginationContainer}>
        <TouchableOpacity
          style={styles.pageButton}
          onPress={() => setPage(1)}
          disabled={page === 1 || pageLoading}
        >
          <Ionicons name="arrow-undo" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pageButton}
          onPress={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1 || pageLoading}
        >
          <Ionicons name="chevron-back" size={24} color="blue" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.pageButton}
          onPress={() => setPage((prev) => Math.min(prev + 1, MAX_PAGE))}
          disabled={page === MAX_PAGE || pageLoading}
        >
          <Ionicons name="chevron-forward" size={24} color="blue" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.pageButton}
          onPress={() => setPage(MAX_PAGE)}
          disabled={page === MAX_PAGE || pageLoading}
        >
          <Ionicons name="arrow-redo" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  loaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  loadingText: {
    fontSize: 16,
    marginLeft: 10,
    color: "gray",
  },
  pageLabel: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  transactionItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  text: {
    fontSize: 16,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  pageButton: {
    marginHorizontal: 10,
  },
});

export default TransactionsScreen;
