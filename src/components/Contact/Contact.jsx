import PropTypes from 'prop-types';
import { Wrapper, Icon, Number, Button } from './Contact.styled';
import { FaUser } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <Wrapper>
        <Icon>
          <FaUser />
        </Icon>
        <p>{name}</p>
      </Wrapper>
      <Wrapper>
        <Number>{number}</Number>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          <TiDelete size="50px" />
        </Button>
      </Wrapper>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
