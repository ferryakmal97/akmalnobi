import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';

import {black, moderateScale, navy, white} from '~common';
import {GradientContainer, Icons, ListCoin, TextInput} from '~components';
import {getList} from '~services/api';
import {toast} from '~utils';

const ListScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [search, setSearch] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      const result = await getList();
      setData(result.data);
    } catch (error) {
      toast('Something Went Wrong');
    } finally {
      setLoading(false);
    }
  };

  const onSearch = search => {
    setSearchText(search);
    const searchData = data.filter(val =>
      val.ticker.includes(search.toUpperCase()),
    );
    setSearch(searchData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <GradientContainer style={styles.container} colors={[navy, black]}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.replace('TabStack')}>
          <Icons
            name="keyboard-arrow-left"
            type="material"
            color={white}
            size={moderateScale(32)}
          />
        </Pressable>
        <TextInput
          value={searchText}
          onChangeText={val => onSearch(val)}
          prefixComponent={<Icons name="search" />}
          placeholder="Search"
          wrapperStyle={{flex: 1}}
        />
      </View>
      <FlatList
        style={styles.listContainer}
        data={searchText ? search : data}
        keyExtractor={item => item.ticker}
        renderItem={({item, index}) => (
          <ListCoin
            key={index}
            title={item.ticker}
            amount={item.amount}
            image={item.image}
            style={{
              borderBottomWidth:
                index === data.length - 1 || index === search.length - 1
                  ? 0
                  : 3,
            }}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getData} />
        }
      />
    </GradientContainer>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: moderateScale(12),
    alignItems: 'baseline',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: moderateScale(18),
    alignItems: 'center',
  },
  listContainer: {flex: 1, width: '100%'},
});
