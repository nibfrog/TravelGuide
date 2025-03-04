import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const DAYS = ['日', '一', '二', '三', '四', '五', '六'];
const MONTHS = ['2月', '3月'];

export default function DatePicker() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [hasConfirmedDate, setHasConfirmedDate] = useState(true);

  const renderCalendar = (month: string) => {
    const days = Array.from({ length: 28 }, (_, i) => i + 1);
    return (
      <View key={month} style={styles.monthContainer}>
        <Text style={styles.monthTitle}>{`2025年${month}`}</Text>
        <View style={styles.weekDays}>
          {DAYS.map((day, index) => (
            <Text
              key={index}
              style={[
                styles.weekDay,
                (index === 0 || index === 6) && styles.weekendDay,
              ]}>
              {day}
            </Text>
          ))}
        </View>
        <View style={styles.daysGrid}>
          {days.map((day) => {
            const isToday = day === 23;
            const isDisabled = day < 23;
            return (
              <Pressable
                key={day}
                style={[
                  styles.dayCell,
                  isDisabled && styles.disabledDay,
                  selectedDate === `${month}${day}日` && styles.selectedDay,
                ]}
                onPress={() => !isDisabled && setSelectedDate(`${month}${day}日`)}
                disabled={isDisabled}>
                <Text
                  style={[
                    styles.dayText,
                    isDisabled && styles.disabledDayText,
                    selectedDate === `${month}${day}日` && styles.selectedDayText,
                    isToday && styles.todayText,
                  ]}>
                  {day}
                </Text>
                {isToday && <Text style={styles.todayLabel}>今天</Text>}
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="#333" />
        </Pressable>
        <Text style={styles.title}>选择出游日期</Text>
        <Pressable onPress={() => router.back()} style={styles.confirmButton}>
          <Text style={styles.confirmText}>确认</Text>
        </Pressable>
      </View>

      <View style={styles.dateTypeContainer}>
        <Text style={styles.dateTypeQuestion}>是否有明确的出游日期</Text>
        <View style={styles.dateTypeOptions}>
          <Pressable
            style={[
              styles.dateTypeOption,
              hasConfirmedDate && styles.dateTypeOptionActive,
            ]}
            onPress={() => setHasConfirmedDate(true)}>
            <Text
              style={[
                styles.dateTypeText,
                hasConfirmedDate && styles.dateTypeTextActive,
              ]}>
              有明确日期
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.dateTypeOption,
              !hasConfirmedDate && styles.dateTypeOptionActive,
            ]}
            onPress={() => setHasConfirmedDate(false)}>
            <Text
              style={[
                styles.dateTypeText,
                !hasConfirmedDate && styles.dateTypeTextActive,
              ]}>
              有大致计划
            </Text>
          </Pressable>
        </View>
      </View>

      {MONTHS.map(renderCalendar)}
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
  dateTypeContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  dateTypeQuestion: {
    fontSize: 16,
    marginBottom: 12,
  },
  dateTypeOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  dateTypeOption: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
  },
  dateTypeOptionActive: {
    backgroundColor: '#E6F0FF',
  },
  dateTypeText: {
    color: '#666',
  },
  dateTypeTextActive: {
    color: '#007AFF',
  },
  monthContainer: {
    padding: 16,
  },
  monthTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  weekDays: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    textAlign: 'center',
    color: '#333',
  },
  weekendDay: {
    color: '#FF3B30',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: 16,
    color: '#333',
  },
  disabledDay: {
    opacity: 0.3,
  },
  disabledDayText: {
    color: '#999',
  },
  selectedDay: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
  },
  selectedDayText: {
    color: 'white',
  },
  todayText: {
    color: '#007AFF',
  },
  todayLabel: {
    fontSize: 10,
    color: '#007AFF',
    marginTop: 2,
  },
});