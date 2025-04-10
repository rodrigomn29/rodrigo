import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home';
import { Password } from './pages/password';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => { if (focused) {
                        return <Ionicons name="lock-closed" size={size} color={color} />;
                    }
                    return <Ionicons name="home-outline" size={size} color={color} />; }                    
                    
                }} 
            />
            <Tab.Screen name="Passwords" component={Password} options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => { 
                    if (focused) {
                        return <Ionicons name="lock-closed" size={size} color={color} />;
                    }
                    return <Ionicons name="home-outline" size={size} color={color} />; }    
            }} />
        </Tab.Navigator>
    );
}

export function Settings() {
    return (
        <View>
            <Text>Configurações</Text>
        </View>
    );
}