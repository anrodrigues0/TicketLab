import {Container, Label, TextContent} from './Information.style';

type InformationProps = {
  label: string;
  content: string;
  large?: boolean;
};

export function Information({content, label, large}: InformationProps) {
  return (
    <Container>
      <Label>{label}:</Label>
      <TextContent large={large}>{content}</TextContent>
    </Container>
  );
}
