import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function OrderDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [progress] = useState(30);
  const [phone, setPhone] = useState('+86 173 **** 3904');
  const [email, setEmail] = useState('');
  const [travelers, setTravelers] = useState('');
  const [budget, setBudget] = useState('');
  
  const travelerTypes = ['亲子', '带爸妈', '好友结伴', '情侣/夫妻', '蜜月'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
        <Text style={styles.headerTitle}>订单详情</Text>
        <View style={styles.rightButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="white" />
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.progressSection}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressText}>{progress}%</Text>
            <Text style={styles.progressLabel}>完成度</Text>
          </View>
          <Text style={styles.progressNote}>
            您可在4分23秒内更新联系要求和完善行程需求
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>联系要求</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>大陆手机</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="+86"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="便于定制师与您联系（选填）"
            />
          </View>

          <Pressable style={styles.optionButton}>
            <Text style={styles.optionText}>联系方式</Text>
            <Text style={styles.optionValue}>优先通过手机号联系</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </Pressable>

          <Pressable style={styles.optionButton}>
            <Text style={styles.optionText}>联系时间</Text>
            <Text style={styles.optionValue}>请选择方便定制师联系您的时间</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </Pressable>
        </View>

        <View style={styles.guideSection}>
          <Text style={styles.sectionTitle}>最多几位定制师服务</Text>
          <View style={styles.guideOptions}>
            <Text style={[styles.guideOption, styles.guideOptionInactive]}>1位</Text>
            <Text style={[styles.guideOption, styles.guideOptionActive]}>2位</Text>
            <Text style={[styles.guideOption, styles.guideOptionInactive]}>3位</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>行程需求</Text>
          
          <Pressable style={styles.optionButton}>
            <Text style={styles.optionText}>出游人数</Text>
            <Text style={styles.optionValue}>请选择出游人数（选填）</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </Pressable>

          <Pressable style={styles.optionButton}>
            <Text style={styles.optionText}>出游日期</Text>
            <Text style={styles.optionValue}>请选择出游日期和天数（选填）</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </Pressable>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>人均预算</Text>
            <TextInput
              style={styles.input}
              value={budget}
              onChangeText={setBudget}
              placeholder="请输入人均行程总预算（选填）"
              keyboardType="numeric"
            />
          </View>

          <Text style={styles.subSectionTitle}>出游人群（选填）</Text>
          <View style={styles.travelerTypes}>
            {travelerTypes.map((type, index) => (
              <Text key={index} style={styles.travelerType}>{type}</Text>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>不填了</Text>
        </Pressable>
        <Pressable style={styles.submitButton}>
          <Text style={styles.submitButtonText}>提交</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007AFF',
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  rightButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  progressSection: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 12,
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  progressLabel: {
    fontSize: 12,
    color: '#666',
  },
  progressNote: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  optionText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  optionValue: {
    fontSize: 14,
    color: '#999',
    marginRight: 8,
  },
  guideSection: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
  },
  guideOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  guideOption: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    overflow: 'hidden',
  },
  guideOptionActive: {
    backgroundColor: '#E6F0FF',
    color: '#007AFF',
  },
  guideOptionInactive: {
    backgroundColor: '#F5F5F5',
    color: '#666',
  },
  subSectionTitle: {
    fontSize: 14,
    color: '#333',
    marginTop: 16,
    marginBottom: 12,
  },
  travelerTypes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  travelerType: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    fontSize: 14,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
  },
  submitButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});