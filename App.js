// Parent component
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import CustomModal from './CustomModal';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const toggleModal = (data) => {
    setModalData(data);
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Modal with Data" onPress={() => toggleModal({ message: 'Hello from parent!' })} />
      <CustomModal isVisible={isModalVisible} onClose={toggleModal} data={modalData} />
    </View>
  );
};

export default App;
