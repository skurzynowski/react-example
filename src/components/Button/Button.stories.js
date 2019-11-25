import React from 'react';
import Button from '.';
import { storiesOf } from '@storybook/react';
import { text } from "@storybook/addon-knobs";


storiesOf('Task', module)
  .add('default', () => <Button text={text('Default text', 'Text')}/>)