import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TIMES = ['尽早联系', '无', '无'];
const DATES = ['2月23日', '2月24日'];

export default function ContactTime() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.closeButton}>
          <Text style={styles.closeText}>取消</Text>
        </Pressable>
        <Text style={styles.title}>联系时间</Text>
        <Pressable onPress={() => router.back()} style={styles.confirmButton}>
          <Text style={styles.confirmText}>确定</Text>
        </Pressable>
      </View>

      <View style={styles.timeGrid}>
        <View style={styles.timeHeader}>
          <Text style={styles.timeHeaderCell}>日期</Text>
          <Text style={styles.timeHeaderCell}>最早</Text>
          <Text style={styles.timeHeaderCell}>最晚</Text>
        </View>

        {DATES.map((date, index) => (
          <Pressable
            key={date}
            style={[
              styles.timeRow,
              selectedDate === date && styles.selectedTimeRow,
            ]}
            onPress={() => setSelectedDate(date)}>
            <Text style={styles.timeCell}>{date}</Text>
            <Text style={styles.timeCell}>{TIMES[0]}</Text>
            <Text style={styles.timeCell}>{TIMES[1]}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  closeButton: {
    padding: 8,
  },
  closeText: {
    color: '#666',
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  confirmButton: {
    padding: 8,
  },
  confirmText: {
    color: '#007AFF',
    fontSize: 16,
  },
  timeGrid: {
    padding: 16,
  },
  timeHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 12,
    marginBottom: 12,
  },
  timeHeaderCell: {
    flex: 1,
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
  timeRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  selectedTimeRow: {
    backgroundColor: '#F5F5F5',
  },
  timeCell: {
    flex: 1,
    textAlign: 'center',
    color: '#333',
    fontSize: 14,
  },
});