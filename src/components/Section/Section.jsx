import { Tittle, SectionTag } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionTag>
      <Tittle>{title}</Tittle>
      {children}
    </SectionTag>
  );
};
