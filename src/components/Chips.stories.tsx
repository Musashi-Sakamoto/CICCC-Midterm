import React from "react"
import { array } from '@storybook/addon-knobs';

import Chips from "./Chips"

export default {
  title: 'Chips',
}

export const showTypes = () => <Chips title="types" values={array("values", ["Electric", "Water"])} />
export const showResistant = () => <Chips title="resistant" values={array("values", ["Flying", "Steel", "Electric"])} />
export const showWeakness = () => <Chips title="weakness" values={array("values", ["Ground"])} />
