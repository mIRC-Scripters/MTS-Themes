alias _chanmodes { %:echo 00,14 $time(hh:nn) Mode  %::pre 01 $+ %::nick Sets: 14 $+ $gettok(%::modes,1,32)  $+ %::c2 $+ $gettok(%::modes,2-,32) }
