import {View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header, Line, ProfileChat} from '../../components';
import {DUProfile, ICArrowLeftWhite} from '../../assets';
import {db, onValue, ref} from '../../config';
import {getData, showError} from '../../utils';
import {UserData} from '../../redux/UserProfile/UserProfile';

const UserProfile = ({navigation}: any) => {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    fetchUserData();
  }, []);
  console.log(users);

  const fetchUserData = async () => {
    const getDataStorage = await getData('user');
    const uid = getDataStorage.uid;
    try {
      const userRef = ref(db, 'users');
      onValue(userRef, snapshot => {
        if (snapshot.exists()) {
          const dataSnapshot = snapshot.val();
          const userArray: UserData[] = Object.keys(dataSnapshot)
            .filter(key => key !== uid)
            .map(key => dataSnapshot[key]);
          setUsers(userArray);
        }
      });
    } catch (error: any) {
      showError(error);
    }
  };
  return (
    <View className="bg-white flex-1">
      <Header
        type="WithBack"
        title="Temukan Teman"
        navigation={navigation}
        background="bg-background-blue_100"
        arrow={<ICArrowLeftWhite />}
        color="text-white mr-[20px]"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(user => {
          const {fullName, photo, biodata} = user;
          return (
            <View key={user.uid}>
              <ProfileChat
                name={fullName}
                image={photo ? {uri: photo} : DUProfile}
                onPress={() => {
                  navigation.navigate('Chatting', user);
                }}
                className="flex-1 w-full py-[15px] flex-row space-x-[20px] items-center px-[22px]"
                biodata={biodata ? biodata : 'Belum ada biodata'}
              />
              <Line className="bg-background-grey_300" />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default UserProfile;
