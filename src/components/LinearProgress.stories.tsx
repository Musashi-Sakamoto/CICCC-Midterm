import React from "react"
import { number } from '@storybook/addon-knobs';

import LinearProgress from "./LinearProgress"

export default {
  title: 'LinearProgress',
}

export const showMaxCP = () => <LinearProgress title="maxCP" value={number('value', 3000)} />
export const showMaxHP = () => <LinearProgress title="maxHP" value={number('value', 3000)} />
export const showFleetRate = () => <LinearProgress title="fleetRate" value={number('value', 0.2)} />