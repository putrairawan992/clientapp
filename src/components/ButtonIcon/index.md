---
name: Button Icon
menu: Components
---

import { Playground, Props } from 'docz';
import "antd/dist/antd.less";
import ButtonIcon from './';

# Button Text With Icon
This is button  with icon of IPAY88-EPKS

## Properties (props)
<Props of={ButtonIcon} />

## Purpose Of Props
- Type: 'primary' is used for regular button
- Type: 'secondary' is used for first alternative after regular button

## Details
no details

## Playground

### Button with icon type 'primary'
<Playground>
    <ButtonIcon type="primary" icon="fa fa-sign-in" />
</Playground>

### Button with icon type 'secondary'
<Playground>
    <ButtonIcon type="secondary" />
</Playground>