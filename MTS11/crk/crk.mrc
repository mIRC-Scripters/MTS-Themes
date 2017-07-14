;
;
; (c)rackrock (mts theme)
;   by tabo
;
;
alias crksv {
  if (=* !iswm $active) && ($server == $null) { return }
  var %string = m $+ $version + (c)rackrock(mts): everything decays
  if (=* iswm $active) || ($active ischan) || ($query($active)) { say %string }
  else { echo -ait $theme.setting(prefix) %string }
}
alias _crackrockmts.invite { %:echo %::pre 13i06nvitation14/13 $+ %::nick 14( $+ $_shade(%::chan,15,13,15) $+ 14) %:comments }
alias _crackrockmts.whois {
  %:echo 13╓────────06─13──06──13─06─────────14─06──14──06─14──────────── ──  ─
  %:echo 13║ 00 $+ %::nick $+ 14 (15 $+ %::address $+ 14) (00 $+ $_country(%::address) $+ 14)
  %:echo 13║ 14(06i13rcnam06e14)  %::realname
  if (%::chan != $null) { %:echo 13║ 14(06c13hannel06s14) %::chan }
  %:echo 13║ 14(06s13erve06r14)   %::wserver - %::serverinfo
  if (%::away != $null) { %:echo 13║ 14(06a13wa06y14)     %::away }
  if (%::operline != $null) { %:echo 13║ 14(06o13perato06r14) %::operline }
  
  ;;; KTE
  var %idletime = %::idletime
  if (%idletime !isnum) { %idletime = $duration(%idletime) }
  if (%idletime != $null) && (%::signontime != $null) { %:echo 13║ 14(06i13dl06e14)     $_crkdur(%idletime) <signon $asctime($ctime(%::signontime),ddd mmm d HH:nn:ss yyyy) $+ > }
  %:echo 13╙────────06─13──06──13─06─────────14─06──14──06─14──────────── ──  ─
}
alias _crackrockmts.whowas {
  %:echo 13╓────────06─13──06──13─06─────────14─06──14──06─14──────────── ──  ─
  %:echo 13║ 00 $+ %::nick $+ 14 (15 $+ %::address $+ 14) (00 $+ %::from2 $+ 14)
  %:echo 13║ 14(06i13rcnam06e14)  %::realname
  if (%::wserver != $null) { %:echo 13║ 14(06s13erve06r14)   %::wserver - %::serverinfo }
  if (%::away != $null) { %:echo 13║ 14(06a13wa06y14)     %::away }
  %:echo 13╙────────06─13──06──13─06─────────14─06──14──06─14──────────── ──  ─
}
alias _crackrockmts.names {
  var %file = $scriptdir $+ ~removethis.names. $+ $mkfn(%::chan) $+ .tmp,%text = %::text
  if ($left(%text,1) == $chr(35)) { %text = $gettok(%text,2-,32) }
  write " $+ %file $+ " $replace(%text,$chr(32),$lf)
}
alias _crackrockmts.namesend {
  var %file = $scriptdir $+ ~removethis.names. $+ $mkfn(%::chan) $+ .tmp,%win = @__crackrockmts_ $+ %::chan,%win2 = %win $+ ___,%t = 0
  close -@ %win %win2
  window -h %win
  window -h %win2
  loadbuf %win " $+ %file $+ "
  %t = $line(%win,0)
  filter -wwc %win %win2 @*
  %:echo 02╓─ 14[00o15ps14/ $+ $_shade(%::chan,10,11,10) $+ (00 $+ $line(%win2,0) $+ 15)14]
  _crkshownames %win2
  filter -wwc %win %win2 +*
  if ($line(%win2,0)) {
    %:echo 02╟─ 14[00v15ouched(00 $+ $ifmatch $+ 15)14]
    _crkshownames %win2
  }
  filter -wwcx %win %win2 @*
  filter -wwcx %win2 %win +*
  if ($line(%win,0)) {
    %:echo 02╟─ 14[00n15onops(00 $+ $ifmatch $+ 15)14]
    _crkshownames %win
  }
  %:echo 02╙─ 14[00t15otal14/ $+ $_shade(%::chan,10,11,10) $+ (00 $+ %t $+ 15)14]
  close -@ %win %win2
  .remove " $+ %file $+ "
}
alias -l _crkshownames {
  var %win = $1,%str = $2,%n = $line(%win,0),%i = 1,%l = 0,%nick,%symbol,%string = 02║ 14
  if (%n == 0) { return }
  while (%i <= %n) {
    %nick = $line(%win,%i)
    if (@* iswm %nick) { var %symbol = 11@12,%nick = $right(%nick,-1) }
    elseif (+* iswm %nick) { var %symbol = 11v02,%nick = $right(%nick,-1) }
    else { var %symbol = 11 10 }
    %string = %string 14[ $+ %symbol $+ $_fillright(9, ,%nick) 14]
    if (4 // %i) {
      %:echo %string
      var %string = 02║ 14,%l = 0
    }
    inc %i
    inc %l
  }
  if (%l) { %:echo %string }
}
alias _crackrock.topicsetby { %:echo %::pre 00topic by00 %::nick 14[06 $+ $_shade(%::text,06,13,06) $+ 14] }
alias -l _shade {
  var %len = $len($1),%n = $int($calc(%len / 6)),%m
  if (%len > 2) && (%n == 0) { %n = 1 }
  %m = - $+ %n
  if (%len > 2) { return  $+ $2 $+ $left($1,%n) $+  $+ $3 $+ $left($right($1,%m),%m) $+  $+ $4 $+ $right($1,%n) }
  return  $+ $2 $+ $1
}
alias -l _fillright { return $3- $+ $str($2,$calc($1 - $len($strip($3-)))) }
alias -l _crkdur { return $remove($duration($1),ks,k,ays,ay,rs,r,ins,in,ecs,ec) }
alias -l _country {
  var %a = $gettok($gettok($1,-1,64),-1,46)
  if (%a == $null) { %a = _dummy_ }
  goto %a

  :ARPA | return Reverse DNS
  :ATO | return Nato field
  :INT | return International
  :RPA | return Old style Arpanet
  :GOV | return US Government
  :MED | return US Medical
  :MIL | return US Military
  :COM | return Commercial
  :EDU | return Educational Institution
  :NET | return Network
  :ORG | return Non-Profit Organization
    
  :AA | return Aruba (Netherlands)
  :AD | return Andorra
  :AE | return United Arab Emirates
  :AF | return Afghanistan
  :AG | return Antigua and Barbuda
  :AI | return Anguilla (UK)
  :AL | return Albania
  :AM | return Armenia
  :AN | return Netherlands Antilles (Netherlands)
  :AO | return Angola
  :AQ | return Antarctica
  :AR | return Argentina
  :AS | return Samoa (USA)
  :AT | return Austria
  :AU | return Australia
  :AW | return Aruba
  :AZ | return Azerbaidjan
  :BA | return Bosnia-Herzegowina
  :BB | return Barbados
  :BD | return Bangladesh
  :BE | return Belgium
  :BF | return Burkina Faso
  :BG | return Bulgaria
  :BH | return Bahrain
  :BI | return Burundi
  :BJ | return Benin
  :BM | return Bermuda (UK)
  :BN | return Brunei
  :BO | return Bolivia
  :BR | return Brazil
  :BS | return Bahamas
  :BT | return Bhutan
  :BV | return Bouvet Island
  :BW | return Botswana
  :BY | return Belarus
  :BZ | return Belize
  :CA | return Canada
  :CC | return Cocos/Keeling Islands (Australia)
  :CF | return Central African Republic
  :CG | return Congo
  :CH | return Switzerland
  :CI | return C⌠te d'Ivoire
  :CK | return Cook Islands
  :CL | return Chile
  :CM | return Cameroon
  :CN | return China
  :CO | return Colombia
  :CR | return Costa Rica
  :CS | return Czechoslovakia
  :CU | return Cuba
  :CV | return Cape Verde
  :CX | return Christmas Island (Australia)
  :CY | return Cyprus
  :CZ | return Czech Republic
  :DE | return Germany
  :DJ | return Djibouti
  :DK | return Denmark
  :DM | return Dominica
  :DO | return Dominican Republic
  :DZ | return Algeria
  :EC | return Ecuador
  :EE | return Estonia
  :EG | return Egypt
  :EH | return Western Sahara
  :ER | return Eritrea
  :ES | return Spain
  :ET | return Ethiopia
  :FI | return Finland
  :FJ | return Fiji
  :FK | return Malvinas/Falkland Islands (Argentina?UK)
  :FM | return Micronesia
  :FO | return Faroe Islands (Dinamarca)
  :FR | return France
  :FX | return France (European Territory)
  :GA | return Gabon
  :GB | return Great Britain
  :GD | return Grenada
  :GE | return Georgia
  :GF | return French Guiana (FR)
  :GH | return Ghana
  :GI | return Gibraltar (UK)
  :GL | return Greenland (Dinamarca)
  :GM | return Gambia
  :GN | return Guinea
  :GP | return Guadeloupe (FR)
  :GQ | return Equatorial Guinea
  :GR | return Greece
  :GS | return South Georgia and South Sandwich Islands (UK)
  :GT | return Guatemala
  :GU | return Guam (USA)
  :GW | return Guinea Bissau
  :GY | return Guyana
  :HK | return Hong Kong (China)
  :HM | return Heard and McDonald Islands
  :HN | return Honduras
  :HR | return Croatia
  :HT | return Haiti
  :HU | return Hungary
  :ID | return Indonesia
  :IE | return Ireland
  :IL | return Israel
  :IN | return India
  :IO | return British Indian Ocean Territory (UK)
  :IQ | return Iraq
  :IR | return Iran
  :IS | return Iceland
  :IT | return Italy
  :JM | return Jamaica
  :JO | return Jordan
  :JP | return Japan
  :KE | return Kenya
  :KG | return Kirgistan
  :KH | return Cambodia
  :KI | return Kiribati
  :KM | return Comoros
  :KN | return Saint Kitts Nevis Anguilla
  :KP | return North Korea
  :KR | return South Korea
  :KW | return Kuwait
  :KY | return Cayman Islands (UK)
  :KZ | return Kazakhstan
  :LA | return Laos
  :LB | return Lebanon
  :LC | return Saint Lucia
  :LI | return Liechtenstein
  :LK | return Sri Lanka
  :LR | return Liberia
  :LS | return Lesotho
  :LT | return Lithuania
  :LU | return Luxemburgo
  :LV | return Latvia
  :LY | return Libya
  :MA | return Morocco
  :MC | return Monaco
  :MD | return Moldova
  :MG | return Madagascar
  :MH | return Marshall Islands
  :MK | return Macedonia
  :ML | return Mali
  :MM | return Myanmar
  :MN | return Mongolia
  :MO | return Macau (China)
  :MP | return Northern Mariana Islands (USA)
  :MQ | return Martinique (FR)
  :MR | return Mauritania
  :MS | return Montserrat (UK)
  :MT | return Malta
  :MU | return Mauritius
  :MV | return Maldives
  :MW | return Malawi
  :MX | return Mexico
  :MY | return Malaysia
  :MZ | return Mozambique
  :NA | return Namibia
  :NC | return New Caledonia (FR)
  :NE | return Niger
  :NF | return Norfolk Island (Australia)
  :NG | return Nigeria
  :NI | return Nicaragua
  :NL | return Netherlands
  :NO | return Norway
  :NP | return Nepal
  :NR | return Nauru
  :NT | return Neutral Zone
  :NU | return Niue
  :NZ | return New Zealand
  :OM | return Oman
  :PA | return Panama
  :PE | return Peru
  :PF | return French Polynesia (FR)
  :PG | return Papua New Guinea
  :PH | return Philippines
  :PK | return Pakistan
  :PL | return Poland
  :PM | return Saint Pierre and Miquelon (FR)
  :PN | return Pitcairn (UK)
  :PR | return Puerto Rico (USA)
  :PT | return Portugal
  :PW | return Palau
  :PY | return Paraguay
  :QA | return Qatar
  :RE | return Reunion (FR)
  :RO | return Romania
  :RU | return Russia
  :RW | return Rwanda
  :SA | return Saudi Arabia
  :SB | return Solomon Islands
  :SC | return Seychelles
  :SD | return Sudan
  :SE | return Sweden
  :SG | return Singapore
  :SH | return Saint Helena (UK)
  :SI | return Slovenia
  :SJ | return Svalbard and Jan Mayen Islands
  :SK | return Slovak Republic
  :SL | return Sierra Leone
  :SM | return San Marino
  :SN | return Senegal
  :SO | return Somalia
  :SR | return Suriname
  :ST | return Saint Tome and Principe
  :SU | return USSR
  :SV | return El Salvador
  :SY | return Syria
  :SZ | return Swaziland
  :TC | return Turks and Caicos Islands (UK)
  :TD | return Chad
  :TF | return French Southern Territory (FR)
  :TG | return Togo
  :TH | return Thailand
  :TJ | return Tadjikistan
  :TK | return Tokelau
  :TM | return Turkmenistan
  :TN | return Tunisia
  :TO | return Tonga
  :TP | return East Timor
  :TR | return Turkey
  :TT | return Trinidad and Tobago
  :TV | return Tuvalu
  :TW | return Taiwan
  :TZ | return Tanzania
  :UA | return Ukraine
  :UG | return Uganda
  :UK | return United Kingdom
  :UM | return United States, minor outlying islands
  :US | return United States
  :UY | return Uruguay
  :UZ | return Uzbekistan
  :VA | return Vatican City State
  :VC | return Saint Vincent and Grenadines
  :VE | return Venezuela
  :VG | return Virgin Islands (UK)
  :VI | return Virgin Islands (USA)
  :VN | return Viet Nam
  :VU | return Vanuatu
  :WF | return Wallis and Futuna Islands (FR)
  :WS | return Samoa
  :YE | return Yemen
  :YT | return Mayotte (FR)
  :YU | return Yugoslavia
  :ZA | return South Africa
  :ZM | return Zambia
  :ZR | return Zaire
  :ZW | return Zimbabwe

  :%a | return Unknown
}
