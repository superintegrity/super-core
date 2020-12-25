import ContactCard from './ContactCard.svelte'
import { phone, envelope, mapMarker } from 'svelte-awesome/icons'

export default {
  title: 'Presentational/ContactCard',
  component: ContactCard,
}

export const Default = () => PhoneNumber()

export const PhoneNumber = () => {
  return {
    Component: ContactCard,
    props: {
      heading: 'Phone Number',
      content: '0430 777 699',
      icon: phone,
    },
  }
}

export const EmailAddress = () => {
  return {
    Component: ContactCard,
    props: {
      heading: 'Email Address',
      content: 'info@superintegrity.com.au',
      icon: envelope,
    },
  }
}

export const Location = () => {
  return {
    Component: ContactCard,
    props: {
      heading: 'Location',
      children: 'Suite 2.17/203-205 Blackburn Road, Mount Waverley VIC 3149',
      icon: mapMarker,
    },
  }
}
