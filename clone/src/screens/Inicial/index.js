import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Gradient } from "../../components/Gradient";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Entypo, SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import {
  CardCategory,
  CenterImage,
  Container,
  ContainerImage,
  CriadoresImage,
  Descricao,
  SmallImage,
  Title,
  TitleCard,
  TitleCardCenter,
  TitleCardSmall,
  TitleCriadores,
  ViewCategory,
  ViewCriadores,
  ViewIcons,
  ViewTitleCard,
  ViewTitleCriadores,
} from "./styles";
import um from "../../../assets/1.jpg";
import cinco from "../../../assets/5.jpg";
import tres from "../../../assets/3.jpg";
import alex from "../../../assets/alex.png";
import beatriz from "../../../assets/beatriz.png";
import carlos from "../../../assets/carlos.png";
import alie from "../../../assets/alie.png";

export const Inicial = () => {
  const navigation = useNavigation();
  const screenCadastroCategoria = () => {
    navigation.navigate("CadastroCategoria");
  };
  const screenProdutos = () => {
    navigation.navigate("Produtos");
  };
  const screenAlterarCategoria = () => {
    navigation.navigate("AlterarCategoria");
  };

  return (
    <Container>
      <Gradient />
      <Header title="Marketplace" />
      <Title>Sobre nós...</Title>
      <Descricao>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </Descricao>
      <ViewCategory>
        <Title>
          Categorias{" "}
          <TouchableOpacity onPress={screenCadastroCategoria}>
            <Entypo name="plus" size={20} color="#120a8f" />
          </TouchableOpacity>
        </Title>
        <ViewIcons>
          <TouchableOpacity>
            <SimpleLineIcons name="trash" size={18} color="#ff0000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={screenAlterarCategoria}>
            <AntDesign name="edit" size={18} color="#00ff" />
          </TouchableOpacity>
        </ViewIcons>
      </ViewCategory>
      <CardCategory>
        <SmallImage source={tres} />
        <TouchableOpacity onPress={screenProdutos}>
          <CenterImage source={cinco} />
        </TouchableOpacity>
        <SmallImage source={um} />
      </CardCategory>
      <ViewTitleCard>
        <TitleCardSmall>Tec3</TitleCardSmall>
        <TitleCardCenter>Tec1</TitleCardCenter>
        <TitleCardSmall>Tec2</TitleCardSmall>
      </ViewTitleCard>
      <Title>Criadores</Title>
      <ViewCriadores>
         
          <CriadoresImage source={alex} />
          <CriadoresImage source={beatriz} />
          <CriadoresImage source={carlos} />
          <CriadoresImage source={alie} />
          </ViewCriadores>
        <ViewTitleCriadores>

          <TitleCriadores>Alex</TitleCriadores>
          <TitleCriadores>Beatriz</TitleCriadores>
          <TitleCriadores>Carlos</TitleCriadores>
          <TitleCriadores>Alie</TitleCriadores>
        </ViewTitleCriadores>



      

      <Footer />
      <StatusBar style="auto" />
      <Gradient position="bottom" />
    </Container>
  );
};
