import Button3D from '../../components/all-buttons/button-3d/button-3d.component';
import ButtonFading from '../../components/all-buttons/button-fading/button-fading.component';
import ButtonInverted from '../../components/all-buttons/button-inverted/button-inverted.component';
import ButtonScalingColorShadow from '../../components/all-buttons/button-scaling-color-shadw/button-scaling-color-shadw.component';
import ButtonScalingDarkModeGlow from '../../components/all-buttons/button-scaling-dark-mode-glow/button-scaling-dark-mode-glow,component';
import ButtonScalingDarkMode from '../../components/all-buttons/button-scaling-dark-mode/button-scaling-dark-mode.component';
import ButtonScalingDefault from '../../components/all-buttons/button-scaling-default/button-scaling-default.component';
import ButtonScalingGhost from '../../components/all-buttons/button-scaling-ghost/button-scaling-ghost.component';

import Container from '../../components/container/container.component';
import { ButtonContainer, ButtonGlowContainer } from './buttons.styles';

const Buttons = () => {
  return (
    <Container gap="5rem">
      <ButtonContainer>
        <Button3D>3D Button</Button3D>
        <ButtonScalingDefault>Scaling Button</ButtonScalingDefault>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonScalingGhost>Ghost Button</ButtonScalingGhost>
        <ButtonScalingColorShadow>Color Shadow Button</ButtonScalingColorShadow>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonScalingDarkMode>Dark Mode Button</ButtonScalingDarkMode>
        <ButtonGlowContainer>
          <ButtonScalingDarkModeGlow>
            Dark Glow Button
          </ButtonScalingDarkModeGlow>
        </ButtonGlowContainer>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonFading>Fading Button</ButtonFading>
        <ButtonInverted>Inverted Button</ButtonInverted>
      </ButtonContainer>
      <ButtonContainer></ButtonContainer>
    </Container>
  );
};

export default Buttons;
