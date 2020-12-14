import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import Avatar from '../components/Avatar';


const Screen = styled.View`
  flex: 1;
  background-color: #000000;
  padding: 10px;
  align-content: center;
`;

const CampoFoto = styled.View`
  flex: 1;
  background-color: #000000;
  padding: 5px;
  align-content: center;
`;

const CampoAvatar = styled.View`
 
  background-color: #000000;
  padding: 10px;
  align-content: center;
  margin-top: 100px;
`;

const Row = styled.ScrollView`
  height: 80px;
`;

const Label = styled.Text`
  color: white;
  padding: 10px;
`;

const Button = styled.Button`
  margin: 100px;
  background-color: white;
`;

let iconsAvailables = [
  require('../assets/avatars/avatar6.png'),
  require('../assets/avatars/avatar5.png'),
  require('../assets/avatars/avatar4.png'),
  require('../assets/avatars/avatar3.png'),
  require('../assets/avatars/avatar2.png'),
  require('../assets/avatars/avatar1.png'),
];

const ChooseIcon = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      title: 'Editar avatar',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
      },
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: '#ffffff',
      },
      headerTintColor: 'white',
    });
  }, []);

  return (
    <Screen>
      <CampoAvatar>
        <Label>Veja o que temos</Label>
        <View style={{ height: 80 }}>
          <Row horizontal>
            {iconsAvailables.map((item, index) => (
              <Avatar
                key={index}
                image={item}
                onPress={() => {
                  props.navigation.navigate('More', {
                    icon: item,
                    name: props?.route?.params?.name,
                    image: null,
                  });
                }}
              />
            ))}
          </Row>
        </View>
      </CampoAvatar>
      <CampoFoto>
        <Label>Tira um foto</Label>
        <Button
          color="#1a1718"
          title="Abrir camera"
          onPress={() => {
            props.navigation.navigate('Camera', {
              name: props?.route?.params?.name,
            });
          }} />
      </CampoFoto>
    </Screen>
  );
};

export default ChooseIcon;
