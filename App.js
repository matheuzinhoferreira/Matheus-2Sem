import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

          <Image style={styles.img} source={require('./assets/icon.png')} />
          <Text style={styles.texto1}>Bem-vindo ao React Native!</Text>
          <Text style={styles.texto1}>Desenvolvendo apps para dispositivos móveis.</Text>
          <Text style={styles.texto1}>Aprendizado constante é a chave do sucesso.</Text>
          <Text style={styles.texto1}>Transformando ideias em aplicativos.</Text>
          <Text style={styles.texto1}>Inovação e criatividade na programação.</Text>

          <Text style={styles.texto2}>Explore novas possibilidades com código.</Text>
          <Text style={styles.texto2}>Criando experiências incríveis para usuários.</Text>
          <Text style={styles.texto2}>O futuro é móvel e digital.</Text>
          <Text style={styles.texto2}>Inspire-se e programe com paixão.</Text>
          <Text style={styles.texto2}>Do conceito à implementação perfeita.</Text>

          <Text style={styles.texto3}>Cada linha de código conta.</Text>
          <Text style={styles.texto3}>Superando desafios tecnológicos diariamente.</Text>
          <Text style={styles.texto3}>Construindo soluções inteligentes e rápidas.</Text>
          <Text style={styles.texto3}>Design funcional aliado à tecnologia.</Text>
          <Text style={styles.texto3}>Interatividade que encanta e engaja.</Text>

          <Text style={styles.texto4}>Tecnologia a serviço da praticidade.</Text>
          <Text style={styles.texto4}>Aplicativos que facilitam a vida.</Text>
          <Text style={styles.texto4}>Codificando o amanhã, hoje.</Text>
          <Text style={styles.texto4}>Seja criativo, seja inovador.</Text>
          <Text style={styles.texto4}>Transforme problemas em oportunidades.</Text>

          <View style={styles.buttonContainer1}>
            <View style={[styles.box, { backgroundColor: '#FF6347' }]} />
            <View style={[styles.box, { backgroundColor: '#4682B4' }]} />
            <View style={[styles.box, { backgroundColor: '#32CD32' }]} />
          </View>

        </ScrollView>

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  scrollViewContent: {
    paddingBottom: 20,
  },

  buttonContainer1: {
    flexDirection: 'row',
  },

  box: {
    flex: 1,
    height: 100,
  },

  img: {
    borderRadius: 23,
    alignSelf: 'center',
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  texto1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },

  texto2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },

  texto3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },

  texto4: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
});
