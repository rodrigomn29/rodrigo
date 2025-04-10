import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {     
    const getItem = async (key: string): Promise<any[]> => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return passwords ? JSON.parse(passwords) : []; // Se não houver nada, retorna um array vazio
        } catch (error) {
            console.log("Erro ao buscar", error);
            return [];
        }
    };

    const saveItem = async (key: string, value: any): Promise<void> => {
        try {
            let passwords = await getItem(key);
            passwords.push(value); // Adiciona o novo item ao array de senhas
            await AsyncStorage.setItem(key, JSON.stringify(passwords)); // Salva o array atualizado no AsyncStorage
        } catch (error) {
            console.log("Erro ao salvar", error);
        }
    };

    const removeItem = async (key: string, item: any): Promise<void> => {
        try {
            let passwords = await getItem(key);

            let myPasswords = passwords.filter((password) => {
                return password !== item; // Filtra o array para remover o item específico
            });

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords)); // Atualiza o AsyncStorage com o array filtrado
        } catch (error) {
            console.log("Erro ao remover", error);
        }
    };

    return {
        getItem,
        saveItem,
        removeItem,
    };
};

export default useStorage;