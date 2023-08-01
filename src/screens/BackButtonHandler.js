import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

const BackButtonHandler = ({ navigation, children }) => {
  useEffect(() => {
    const backAction = () => {
      // Verifica se o usuário está na tela principal do seu aplicativo
      // Se estiver na tela principal, não realiza nenhuma ação
      if (navigation.isFocused()) {
        return true; // Retorna true para impedir o comportamento padrão do botão "Voltar"
      }
      return false; // Retorna false para permitir o comportamento padrão do botão "Voltar"
    };

    // Adiciona o listener para capturar o evento de pressionar o botão "Voltar"
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    // Remove o listener quando o componente é desmontado
    return () => backHandler.remove();
  }, [navigation]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default BackButtonHandler;
