import React from 'react';
import Header from '.';
import { storiesOf } from '@storybook/react';


storiesOf('Task', module)
  .add('default', () => <Header title="Tytuł strony"/>)