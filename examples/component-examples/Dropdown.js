import React from 'react'
import {LiveEditor} from '@compositor/kit'
import {Box, Dropdown, Link} from '../../src'
import ExampleHeading from '../doc-components/ExampleHeading'

const dropdownPrimary = `<Dropdown scheme="primary" minWidth="5em">
  <ul className="list-style-none m-0 p-0">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</Dropdown>`

const dropdown = `<Dropdown minWidth="5em">
  <ul className="list-style-none m-0 p-0">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</Dropdown>`

const dropdownTitle = `<Dropdown title="Options" minWidth="5em">
  <ul className="list-style-none m-0 p-0">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</Dropdown>`

const scope = {Box, Dropdown, Link}

const DropdownExample = {
  name: 'Dropdown',
  element: (
    <div>
      <Box mb={4}>
        <ExampleHeading>Dropdown Primary</ExampleHeading>
        <LiveEditor code={dropdownPrimary} scope={scope} />
      </Box>
      <Box my={4}>
        <ExampleHeading>Dropdown</ExampleHeading>
        <LiveEditor code={dropdown} scope={scope} />
      </Box>
      <Box my={4}>
        <ExampleHeading>Dropdown with title</ExampleHeading>
        <LiveEditor code={dropdownTitle} scope={scope} />
      </Box>
    </div>
  )
}

export default DropdownExample
