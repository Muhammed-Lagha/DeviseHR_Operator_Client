<template>
    <span>{{ countryFlag }}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    countryName: string
}>();

const countryFlag = ref<string>(getCountryFlag(props.countryName) )

function getCountryFlag(countryName: string): string {
  const countryFlags: { [key: string]: string } = {
    Afghanistan: '🇦🇫',
    Albania: '🇦🇱',
    Algeria: '🇩🇿',
    Argentina: '🇦🇷',
    Armenia: '🇦🇲',
    Australia: '🇦🇺',
    Austria: '🇦🇹',
    Azerbaijan: '🇦🇿',
    Bahamas: '🇧🇸',
    Bahrain: '🇧🇭',
    Bangladesh: '🇧🇩',
    Belarus: '🇧🇾',
    Belgium: '🇧🇪',
    Bolivia: '🇧🇴',
    Brazil: '🇧🇷',
    Bulgaria: '🇧🇬',
    Burundi: '🇧🇮',
    Canada: '🇨🇦',
    'Central African Republic': '🇨🇫',
    'Central African Republic ': '🇨🇫',
    Chile: '🇨🇱',
    China: '🇨🇳',
    Colombia: '🇨🇴',
    Cuba: '🇨🇺',
    'Czech Republic': '🇨🇿',
    Germany: '🇩🇪',
    Djibouti: '🇩🇯',
    Denmark: '🇩🇰',
    Dominica: '🇩🇲',
    'Dominican Republic': '🇩🇴',
    Egypt: '🇪🇬',
    Spain: '🇪🇸',
    Finland: '🇫🇮',
    France: '🇫🇷',
    Gabon: '🇬🇦',
    Georgia: '🇬🇪',
    Ghana: '🇬🇭',
    Greece: '🇬🇷',
    Guatemala: '🇬🇹',
    Guyana: '🇬🇾',
    Haiti: '🇭🇹',
    Honduras: '🇭🇳',
    'Hong Kong': '🇭🇰',
    Hungaryary: '🇭🇺',
    Iceland: '🇮🇸',
    India: '🇮🇳',
    Indonesia: '🇮🇩',
    Iran: '🇮🇷',
    Iraq: '🇮🇶',
    Ireland: '🇮🇪',
    Italy: '🇮🇹',
    Jamaica: '🇯🇲',
    Jordan: '🇯🇴',
    Kazakhstan: '🇰🇿',
    Kenya: '🇰🇪',
    Kiribati: '🇰🇮',
    Kuwait: '🇰🇼',
    Latvia: '🇱🇻',
    Lebanon: '🇱🇧',
    Liberia: '🇱🇷',
    Lithuania: '🇱🇹',
    Luxembourg: '🇱🇺',
    Liechtenstein: '🇱🇮',
    Libya: '🇱🇾',
    Madagascar: '🇲🇬',
    Malawi: '🇲🇼',
    Malaysia: '🇲🇾',
    Mexico: '🇲🇽',
    Moldova: '🇲🇩',
    Monaco: '🇲🇨',
    Mongolia: '🇲🇳',
    Montenegro: '🇲🇪',
    Morocco: '🇲🇦',
    Mozambique: '🇲🇿',
    Myanmar: '🇲🇲',
    Namibia: '🇳🇦',
    Nepal: '🇳🇵',
    Netherlands: '🇳🇱',
    'New Zealand': '🇳🇿',
    Nicaragua: '🇳🇮',
    Niger: '🇳🇪',
    Nigeria: '🇳🇬',
    Norway: '🇳🇴',
    Oman: '🇴🇲',
    Pakistan: '🇵🇰',
    Panama: '🇵🇦',
    'Papua New Guinea': '🇵🇬',
    Paraguay: '🇵🇾',
    Peru: '🇵🇪',
    Philippines: '🇵🇭',
    Poland: '🇵🇱',
    Portugal: '🇵🇹',
    Qatar: '🇶🇦',
    'Republic of the Congo': '🇨🇬',
    'Republic of the Congo ': '🇨🇬',
    Romania: '🇷🇴',
    Russia: '🇷🇺',
    Rwanda: '🇷🇼',
    'Saint Kitts and Nevis': '🇰🇳',
    'Saint Lucia': '🇱🇨',
    'Saint Vincent and the Grenadines': '🇻🇨',
    Samoa: '🇼🇸',
    'San Marino': '🇸🇲',
    'Sao Tome and Principe': '🇸🇹',
    'Saudi Arabia': '🇸🇦'
    // Add more country flags here...
  }

  const flag = ref('')

  // Convert the country name to lowercase and remove any leading/trailing spaces
  const formattedCountryName = countryName.toLowerCase().trim()

  if (formattedCountryName in countryFlags) {
    flag.value = countryFlags[formattedCountryName]
  } else {
    flag.value = '❓' // Default flag for unknown countries
  }

  return flag.value
}
</script>
