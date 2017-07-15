; Kte - Kamek's Theme Engine v1.5
; MTS-compatible theme engine (standard v1.0/1.1) -- homepage: http://www3.brinkster.com/ircweb/mts/
; Dialogs made using Dialog Studio

alias kte.load if (!$isid) { kte_load $1- }
alias kte.unload if (!$isid) { kte_unload $1- }
alias kte.scheme if (!$isid) { kte_scheme $1- }
alias kte.refresh if (!$isid) { kte_refresh $1- }

alias kte.echo if (!$isid) { kte_echo $1- }
alias kte.error if (!$isid) { kte_error $1- }

alias theme.setting return $hget(Kte_Theme, $1)
alias theme.load if (!$isid) { kte_load $1- }
alias theme.unload if (!$isid) { kte_unload $1- }
alias theme.scheme if (!$isid) { kte_scheme $1- }
alias mtsversion return $kte_mtsver

alias -l _isfile if (?*"?* iswm $1) { return } | if ($isfile($1)) { return $1 }
alias -l _hmake if ($hget($1)) { hfree $1 } | hmake $1-

alias -l kte_ver return 1.5
alias -l kte_dynver return 1.5
alias -l kte_mtsver return 1.1

alias -l kte_file return $+(", $scriptdir, $1, ")
alias -l kte_usrfile return $+(", $scriptdir, $1, ")
alias -l kte_dll return $+(", $scriptdir, kte.dll")

alias -l kte_thmdir if ($hget(Kte_Data, ThmDir)) { return $ifmatch } | if ($isdir($mircdir $+ Themes)) { return $mircdir $+ Themes\ } | return $mircdir
alias -l kte_gzdir if ($hget(Kte_Data, GZipDir)) { return $ifmatch } | return $scriptdir
alias -l kte_munzdir if ($hget(Kte_Data, mUnzipDir)) { return $ifmatch } | return $scriptdir
alias -l kte_cachedir return $scriptdir $+ Cache\
alias -l kte_xthmdir return $scriptdir $+ Extracted theme\
alias -l kte_xthmtmpdir return $scriptdir $+ Extracted theme.tmp\

alias -l kte_fontexists return $dll($kte_dll, FontExists, $1)

alias -l _noparse {
  var %i = 1, %t = $numtok($1, 32), %r
  while (%i <= %t) {
    %r = %r $airc_noparse_safetok($gettok($1, %i, 32))
    inc %i
  }
  return %r
}

alias -l airc_noparse_safetok {
  if ($istok(35 91 124, $asc($1), 32) && $len($1) == 1) { return $!chr( $+ $asc($1) $+ ) }
  if ($1 == [[ $+ [[) { return [[ $+ [[ $!+ [[ $+ [[ }
  if ($1 == ]] $+ ]]) { return ] $+ ] $!+ ] $+ ] }
  if ($!* iswm $1) { return $+($, !, $mid($1, 2)) }
  if (% $+ * iswm $1) { return % $!+ $airc_noparse__safetok($mid($1, 2)) }
  return $1
}
alias -l airc_noparse__safetok return $airc_noparse_safetok($1)

alias -l kte_listschemes {
  var %s = $hget(Kte_Theme, Scheme $+ $1)
  if (!%s) || ($1 !isnum) { return }
  return $iif(($hget(Kte_Data, CurScheme) = $1), $style(1)) $_noparse(%s) $+ :kte_scheme $1
}

menu menubar {
  -
  Load theme...:kte_load
  $iif(($hget(Kte_Theme, Scheme1) != $null), Change scheme)
  .$iif((!$hget(Kte_Data, CurScheme)), $style(1)) No scheme:kte_scheme -d
  .-
  .$submenu($kte_listschemes($1))
}

on *:START:kte_onstart
on *:LOAD:kte_onload
on *:UNLOAD:kte_onunload

on *:CONNECT:kte_v connected 1
on *:DISCONNECT:hdel -w Kte_Data $+(c, $cid, :*)
on *:EXIT:hdel -w Kte_Data c*:* | kte_savedata

on *:JOIN:#:kte_onjoin
on *:PART:#:if ($nick == $me) { kte_left $chan }
on *:KICK:#:if ($knick == $me) { kte_left $chan }

alias -l kte_onstart {
  _hmake Kte_Theme 16
  if ($isfile($kte_file(Kte-Theme.dat))) { hload -b Kte_Theme $kte_file(Kte-Theme.dat) }
  elseif ($isfile($kte_file(Kte-DefTheme.dat))) { hload -b Kte_Theme $kte_file(Kte-DefTheme.dat) }
  _hmake Kte_Data 8 | if ($isfile($kte_file(Kte-Data.dat))) { hload -b Kte_Data $kte_file(Kte-Data.dat) }
  _hmake Kte_Events 8 | .kte_refresh -n
  hdel -w Kte_Data c*:*
  if ($hget(Kte_Data, Hide) !isnum) { hadd Kte_Data Hide 8 }
  if ($hget(Kte_Data, Cache) !isnum) { hadd Kte_Data Cache 3 }
  if ($hget(Kte_Data, Apply) !isnum) { hadd Kte_Data Apply 959 }
  if ($hget(Kte_Data, FRep.Status) = $null) && (!$lock(dll)) {
    ; add some font replacements
    var %rep = 0, %bestrep = Terminal, %msss = Microsoft Sans Serif
    if (!$kte_fontexists(IBMPC)) { hadd Kte_Data FRep.Rep.IBMPC Terminal | %rep = 1 }
    else { %bestrep = IBMPC }
    if (!$kte_fontexists(GwdTE_437)) { hadd Kte_Data FRep.Rep.GwdTE_437 %bestrep | %rep = 1 }
    if (!$kte_fontexists(PC8X16)) { hadd Kte_Data FRep.Rep.PC8X16 %bestrep | %rep = 1 }
    if ($kte_fontexists(%msss)) { hadd Kte_Data FRep.Rep.MS\~Sans\~Serif %msss | %rep = 1 }
    hadd Kte_Data FRep.Status %rep
  }
  if ($hget(Kte_Data, TimestampFormat) != $null) { .timestamp -f $ifmatch }
  if ($lock(dll)) { kte_echo -a Please enable the /dll command in mIRC Options (Alt+O), General\Lock section. }
  unset %kte__* %_kte_*
}

alias -l kte_onload {
  if ($version < 6.01) { echo -ati2 Please use this add-on on mIRC 6.01 or greater. | .timer -o 1 0 .unload -nrs $+(", $script, ") | return }
  .enable #Kte_DefTheme
  if ($hget(Kte_Theme)) { hfree Kte_Theme } | if ($hget(Kte_Data)) { hfree Kte_Data } | if ($hget(Kte_Events)) { hfree Kte_Events }
}
alias -l kte_onunload {
  var %p
  if ($isfile($kte_file(Kte-Restore.dat))) { %p = $crlf $+ Your settings will be restored. }
  if ($hget(Kte_Data, CurTheme)) && ($input(Unload current theme before unloading Kte? $+ %p, 8)) { theme.unload }
  else {
    if ($script($kte_usrfile(Kte-Dyn.mrc))) { .unload -rs $+(", $ifmatch, ") }
    hdel Kte_Data CurTheme
    hdel Kte_Data Extracted
  }
  if ($dll($kte_dll)) { dll -u $kte_dll }
  hfree Kte_Theme | kte_savedata | hfree Kte_Data
  .remove $kte_file(Kte-Theme.dat)
  .remove $kte_file(Kte-Restore.dat)
  .remove $kte_usrfile(Kte-Dyn.mrc)
  unset %kte_* %_kte_*
  hfree -w Kte_*
}

alias kte_refresh {
  if ($isid) { return }
  if ($1 != -n) { saveini }
  hdel -w Kte_Events *
  hadd Kte_Events Active.Invites $gettok($readini($mircini, options, n3), 26, 44)
  hadd Kte_Events Active.Queries $gettok($readini($mircini, options, n4), 5, 44)
  hadd Kte_Events Active.Notices $gettok($readini($mircini, options, n5), 13, 44)
  hadd Kte_Events Active.Whois $gettok($readini($mircini, options, n2), 26, 44)
  hadd Kte_Events Active.CTCPs $gettok($readini($mircini, options, n4), 19, 44)
  hadd Kte_Events Active.Away $gettok($readini($mircini, options, n4), 32, 44)
  var %def = $readini($mircini, events, default), %i = $numtok(%def, 44), %set
  if (!%def) { %def = 1,1,1,1,1,1,1,1 }
  else { while (%i) { %def = $puttok(%def, $calc($gettok(%def, %i, 44) + 1), %i, 44) | dec %i } }
  %i = $chan(0)
  while (%i) {
    %set = $readini($mircini, events, $chan(%i))
    if (!%set) { %set = %def }
    else { while ($findtok(%set, 0, 1, 44)) { %set = $puttok(%set, $gettok(%def, $ifmatch, 44), $ifmatch, 44) } }
    hadd Kte_Events $chan(%i) %set
    dec %i
  }
  kte_echo -a Settings were updated from $+(', $nopath($mircini), '.)
}

alias kte_load {
  if ($isid) { return }
  if ($lock(dll)) { kte_error -a You must first enable the /dll command in mIRC Options (Alt+O), General\Lock section. | return }
  var %h = Kte_Theme, %dat = Kte_Data, %fn, %ofn, %zfn, %ngz = $kte_gzdir $+ ngzipn.dll, %xthmdir = $kte_xthmtmpdir
  if (!$isdir($kte_cachedir)) { mkdir $+(", $kte_cachedir, ") }
  if (!$0) { kte_dlg -md kte_load | return }
  if ($0 > 1) && ($regex($1, /-s\d+/i)) { var %sch = $int($mid($1, 3)) | tokenize 32 $2- }
  set -n %fn $1-
  if ("*" iswm %fn) { %fn = $mid(%fn, 2, -1) }
  if (*.mts !iswm %fn) && (*.mts.gz !iswm %fn) && (*.vpk !iswm %fn) && (*.vpk.gz !iswm %fn) && (*.zip !iswm %fn) { %zfn = %fn $+ .zip | %fn = %fn $+ .mts }
  :zipsearch
  if (\* !iswm %fn) && (?:\* !iswm %fn) {
    var %tfn = $kte_thmdir $+ %fn
    if ($isfile(%tfn)) { %fn = %tfn }
    elseif ($kte_trydir(%fn)) { %fn = $ifmatch }
    elseif ($findfile($kte_thmdir, %fn, 1, 2)) { %fn = $ifmatch }
  }
  if (!$isfile(%fn)) {
    if (%zfn) { %fn = %zfn | var %zfn | goto zipsearch }
    kte_error -a File not found
    return
  }
  if (*.mts.gz iswm %fn) {
    %ofn = %fn | %fn = $left(%fn, -3)
    if (!$isfile(%ngz)) { kte_error -a nGZIPn is needed to decompress this file | goto end }
    if (!$dll(%ngz, unzip, $left(%ofn, -3))) { kte_error -a nGZIPn was unable to decompress this file | goto end }
    if (!$isdir(%xthmdir)) { mkdir $+(", %xthmdir, ") }
    .rename $+(", %fn, ") $+(", %xthmdir, $nopath(%fn), ")
    %fn = %xthmdir $+ $nopath(%fn)
  }
  elseif (*.vpk iswm %fn) || (*.vpk.gz iswm %fn) {
    var %nfn = %fn
    if (*.gz iswm %fn) {
      %nfn = $left(%fn, -3)
      if (!$isfile(%ngz)) { kte_error -a nGZIPn is needed to decompress this file | goto end }
      if (!$dll(%ngz, unzip, $left(%fn, -3))) { kte_error -a nGZIPn was unable to decompress this file | goto end }
    }
    kte_vpak_extract $+(", %nfn, ") $+(", $kte_xthmtmpdir, ") | if (*.gz iswm %fn) { .remove $+(", %nfn, ") }
    var %killtmp = $true
    if ($result) { kte_error -a vPak error ( $+ $ifmatch $+ ) | goto end }
    var %ofn = %fn, %fn = $findfile($kte_xthmtmpdir, *.mts, 1, 9)
    if (!%fn) { kte_error -a No theme file was found on the specified vPak archive | goto end }
  }
  elseif (*.zip iswm %fn) {
    var %munz = $+(", $kte_munzdir, mUnzip.dll")
    if (!$isfile(%munz)) { kte_error -a mUnzip is needed to decompress this file | goto end }
    if (S_OK* !iswm $dll(%munz, Unzip, -Q2do $+(", %fn, ") $+(", $kte_xthmtmpdir, "))) {
      kte_error -a mUnzip was unable to decompress this file | goto end
    }
    var %killtmp = $true
    var %ofn = %fn, %fn = $findfile($kte_xthmtmpdir, *.mts, 1, 9)
    if (!%fn) { kte_error -a No theme file was found on the specified zip archive | goto clear }
  }
  %fn = $+(", %fn, ")
  ; ok, file exists... check if it's valid...
  if (!$read(%fn, nw, [mts])) { kte_error -a Invalid theme file (main theme section not found) | goto end }
  var %ver = $read(%fn, ns, MTSVersion)
  if (!%ver) { kte_error -a Invalid theme file (no MTS version declared) | goto end }
  elseif (!$istok(1 1.1, $calc(%ver), 32)) { kte_error -a Invalid theme file (standard v $+ %ver is not supported) | goto end }
  if (%sch != $null) && ((%sch = 0) || (!$read(%fn, nw, $+([Scheme, %sch, ])))) {
    kte_error -a Invalid parameter (there's no scheme $chr(35) $+ %sch $+ ) | goto end
  }
  ; if the file is in the temp dir, move it to the extracted dir
  if (%ofn) {
    var %x
    kte_killxthm
    if (!$isdir($kte_xthmdir)) { mkdir $+(", $kte_xthmdir, ") }
    %x = $finddir($kte_xthmtmpdir, *, 0, 9, .mkdir $+(", $kte_xthmdir, $mid($1-, $calc($len($kte_xthmtmpdir) + 1)), "))
    %x = $findfile($kte_xthmtmpdir, *, 0, 9, .rename $+(", $1-, ") $+(", $kte_xthmdir, $mid($1-, $calc($len($kte_xthmtmpdir) + 1)), "))
    %fn = $mid(%fn, 2, -1)
    %fn = $+(", $kte_xthmdir, $mid(%fn, $calc($len($kte_xthmtmpdir) + 1)), ")
    %_kte_killedtmp = 1
  }
  ; now, theme WILL load
  %_kte_ofn = %ofn
  %_kte_fn = %fn
  %_kte_sch = %sch
  kte_doload
  kte_savedata
  :end
  if (%ofn) { var %x = $findfile($kte_xthmtmpdir, *, 0, 9, .remove $+(", $1-, ")) } | if (%killtmp) { kte_killtmp }
  unset %_kte_*
}

alias kte_scheme {
  if ($isid) { return }
  var %thm = $hget(Kte_Data, CurTheme), %i = 1
  if (!%thm) { kte_error -a There's no theme loaded. | return }
  if (!$isfile(%thm)) { kte_error -a The theme file was not found. | return }
  if (!$0) {
    var %r | while ($hget(Kte_Theme, Scheme $+ %i) != $null) { %r = %r $ifmatch $+ , | inc %i }
    if (%r = $null) { kte_echo -a The current theme has no schemes }
    else { kte_echo -a Schemes from the current theme: $left(%r, -1) } | return
  }
  if ($0 = 1) && ($1 isnum) && (. !isin $1) && ($hget(Kte_Theme, Scheme $+ $int($1)) != $null) { set -u %_kte_sch $int($1) }
  elseif ($1- != -d) { while ($hget(Kte_Theme, Scheme $+ %i) != $null) { if ($ifmatch == $1-) { set -u %_kte_sch %i | break } | inc %i } }
  if (!%_kte_sch) && ($1 != -d) { kte_error -a The requested scheme was not found | return }
  set -u %_kte_fn %thm
  set -u %_kte_chscheme $true
  kte_doload
  kte_savedata
}

alias kte_unload {
  if ($isid) { return }
  if (!$isfile($kte_file(Kte-Restore.dat))) && (!$hget(Kte_Data, CurTheme)) && ($1 != -f) { kte_error -a You're not currently using a theme. | return }
  if (!%_kte_loading) && ($isfile($kte_file(Kte-Restore.dat))) {
    kte_status_open | kte_status_show 0 Unloading current theme...
    if ($hget(Kte_Restore)) { hfree Kte_Restore }
    _hmake Kte_Restore 8
    hload -b Kte_Restore $kte_file(Kte-Restore.dat)
  }
  kte_dounload
  if ($script($kte_usrfile(Kte-Dyn.mrc))) { .unload -rs $+(", $ifmatch, ") | .remove $+(", $ifmatch, ") }
  .enable #Kte_DefTheme
  if ($hget(Kte_Restore)) { hfree Kte_Restore | .remove $kte_file(Kte-Restore.dat) | kte_status_close }
}

alias -l kte_savedata {
  if ($hget(Kte_Theme)) { hsave -ob Kte_Theme $kte_file(Kte-Theme.dat) }
  hsave -ob Kte_Data $kte_file(Kte-Data.dat)
}

alias -l kte_rmdir var %x = $finddir($1-, *, 0, 1, kte_rmdir $1-) | .rmdir $+(", $1-, ")

alias -l kte_trydir if (\ isin $1) { return } | var %fn = $+($kte_thmdir, $iif((*.mts iswm %fn), $left(%fn, -4), %fn), \, $1) | if ($isfile(%fn)) { return %fn }

alias kte_echo kte_out Echo $color(info) $1-
alias kte_error kte_out Error $color(info) $1-
; /kte_out str <type>, int <color>, str <target>, str <text>
alias -l kte_out {
  if ($3 == -a) && (@* !iswm $active) { var %f = a }
  elseif ($3 == -a) || ($3 == -s) { var %f = s } | else { var %p = $3 }
  set -u %:echo echo $2 -qti2 $+ %f %p
  set -nu %::text $4- | theme.text $1
}

alias -l kte_dobackup {
  var %base, %i = 1, %t = 27, %rgb, %f, %font, %fsize, %base-d = back;action;ctcp;high;info;info2;invite;join;kick;mode;nick;normal;notice; $+ $&
    notify;other;own;part;quit;topic;wallops;whois;edit;editbox t;list;listbox t;gray
  saveini
  if (!$hget(Kte_Restore)) { hmake Kte_Restore 8 }
  while (%i <= %t) { %base = %base $+ , $+ $color($gettok(%base-d, %i, 59)) | inc %i }
  %i = 0 | %t = 15 | while (%i <= %t) { %rgb = %rgb $rgb($color(%i)) | inc %i }
  hadd Kte_Restore Colors $gettok(%base, 1-, 44)
  hadd Kte_Restore RGBColors %rgb
  %i = 1 | %t = $cnick(0)
  while (%i <= %t) {
    %f = $+(-, $iif(($cnick(%i).anymode), a), $iif(($cnick(%i).nomode), n), $iif(($cnick(%i).ignore), i), $iif(($cnick(%i).op), o), $iif(($cnick(%i).voice), v), $&
      $iif(($cnick(%i).protect), p), $iif(($cnick(%i).notify), y), m, $cnick(%i).method)
    hadd Kte_Restore CNick- $+ %i %f $iif(($cnick(%i) != $null), $cnick(%i), *) $cnick(%i).color $cnick(%i).modes $cnick(%i).levels
    inc %i
  }
  hadd Kte_Restore Timestamp $iif(($window(Status Window).stamp), ON, OFF)
  hadd Kte_Restore TimestampFormat $readini($mircini, text, timestamp)
  hadd Kte_Restore FontDefault $+($window(Status Window).font, $chr(44), $window(Status Window).fontsize, $&
    $iif(($window(Status Window).fontbold), $chr(44) $+ b))
  %font = $readini($mircini, fonts, fchannel) | %fsize = $gettok(%font, 2, 44)
  hadd Kte_Restore FontChan $gettok(%font, 1, 44) $+ , $+ $right(%fsize, 2) $+ $iif((%fsize > 700), $chr(44) $+ b)
  %font = $readini($mircini, fonts, fquery) | %fsize = $gettok(%font, 2, 44)
  hadd Kte_Restore FontQuery $gettok(%font, 1, 44) $+ , $+ $right(%fsize, 2) $+ $iif((%fsize > 700), $chr(44) $+ b)
  hsave -ob Kte_Restore $kte_file(Kte-Restore.dat)
  hfree Kte_Restore
}

; /kte_doload
alias -l kte_doload {
  var %h = Kte_Theme, %dat = Kte_Data, %fn = %_kte_fn, %w = @Kte_Theme, %i = 1, %t, %sch = %_kte_sch, %ofn = %_kte_ofn, $&
    %chscheme = %_kte_chscheme, %apply = $hget(Kte_Data, Apply)
  kte_status_open
  kte_status_show 0 Preparing to load...
  %_kte_loading = $true
  if ($isbit(%apply, 1)) || (!%apply) { %apply = 1023 }
  if (!%_kte_chscheme) {
    if ($hget(%dat, CurTheme)) { kte_dounload }
    else { kte_dobackup }
    if (%ofn) { hadd %dat Extracted $true } | else { hdel %dat Extracted }
  }
  .disable #Kte_DefTheme
  window -lhBi %w
  hdel -w %h * | if ($isfile($kte_file(Kte-DefTheme.dat))) { hload -ob %h $kte_file(Kte-DefTheme.dat) }
  loadbuf -tmts %w %fn
  if (%sch) { loadbuf -tScheme $+ %sch %w %fn }
  filter -cwwg %w %w /^[^\x20;]/
  %t = $line(%w, 0)
  while (%i <= %t) { hadd %h $line(%w, %i) | inc %i }
  close -@ %w
  if ($hget(%h, BaseColors) != $null) {
    tokenize 44 $ifmatch
    hadd %h BaseColors $replace($kte_bc($1) $kte_bc($2) $kte_bc($3) $kte_bc($4), $chr(32), $chr(44))
  }
  %_kte_apply = %apply
  if ($isbit(%apply, 3)) || ($isbit(%apply, 6)) { kte_apply_colors }
  if ($isbit(%apply, 5)) { kte_apply_fonts }
  if ($isbit(%apply, 2)) || ($isbit(%apply, 9)) || ($isbit(%apply, 10)) { kte_apply_bg %fn }
  if ($isbit(%apply, 8)) {
    if ($hget(%h, MTSVersion) == 1.0) {
      var %ts = $hget(%h, Timestamp) | if (%ts != $null) && (%ts != off) { hadd %h TimestampFormat $ifmatch | hadd %h Timestamp ON }
    }
    if ($istok(on off, $hget(%h, Timestamp), 32)) { .timestamp $hget(%h, Timestamp) }
    if ($hget(%h, TimestampFormat) != $null) {
      var %ts | set -n %ts $kte__cl($ifmatch)
      .timestamp -f %ts
      hadd Kte_Data TimestampFormat %ts
    }
  }
  if (* !iswm $hget(%h, ParenText)) { hadd %h ParenText (<text>) }
  if ($isbit(%apply, 4)) {
    var %script = $hget(%h, Script), %fscript = $+(", $nofile(%fn), %script, ")
    if (%script != $null) && ($isfile(%fscript)) { hadd %dat Script %fscript | .reload -rs %fscript }
    set -u %_kte_fn %fn
    var %cached = 0, %cfn = $+(", $kte_cachedir, Kte-Dyn-, $nopath(%fn), $iif((%sch), -S $+ %sch), .mrc"), %ln
    if ($isfile(%cfn)) {
      %ln = $read(%cfn, 3)
      if (%ln == ; Kte-Dyn $kte_dynver $crc($kte_file(Kte-Dyn.dat)) $crc(%fn)) {
        .copy -o %cfn $kte_usrfile(Kte-Dyn.mrc)
        write -l3 $kte_usrfile(Kte-Dyn.mrc) ;
        %cached = 1
      }
    }
    if (!%cached) {
      kte_buildfile
      if ($isbit($hget(Kte_Data, Cache), 2)) {
        .copy -o $kte_usrfile(Kte-Dyn.mrc) %cfn
        write -il3 %cfn ; Kte-Dyn $kte_dynver $crc($kte_file(Kte-Dyn.dat)) $crc(%_kte_fn)
      }
    }
    kte_status_show 0 Loading theme script...
    .reload -rs $+ $calc($script(0) + 1) $kte_usrfile(Kte-Dyn.mrc)
  }
  else { .enable #Kte_DefTheme | if ($script($kte_usrfile(Kte-Dyn.mrc))) { .unload -rs $+(", $ifmatch, ") } }
  unset %_kte_loading %_kte_apply
  if (%sch) { hadd Kte_Data CurScheme %sch }
  else { hdel Kte_Data CurScheme }
  kte_status_close
  if (!%chscheme) {
    hadd %dat CurTheme %fn | hadd %dat CurOTheme $iif((%ofn), %ofn, %fn)
    if ($show) { set -u %:echo echo $color(info) -ati2 | linesep -a }
    else { set -u %:echo kte_void }
    theme.text Load
    if ($show) { linesep -a }
  }
}
alias -l kte_bc return $right(0 $+ $int($calc($1 % 16)), 2)

alias -l kte_dounload {
  if ($show) { set -u %:echo echo $color(info) -ati2 } | else { set -u %:echo kte_void }
  if (!$isalias(theme.text)) { .enable #Kte_DefTheme }
  theme.text Unload
  if ($script($longfn($hget(Kte_Data, Script)))) { .unload -rs $+(", $ifmatch, ") }
  if ($hget(Kte_Data, Extracted)) && (!%_kte_killedtmp) { kte_killxthm }
  hdel -w Kte_Theme *
  var %i = 1, %item
  while ($hget(Kte_Data, %i).item) {
    %item = $ifmatch
    if ($istok(ThmDir GZipDir mUnzipDir Hide Cache Apply, %item, 32)) || (FRep.* iswm %item) { inc %i }
    else { hdel Kte_Data %item }
  }
  %_kte_apply = 1023
  ; restoring nicklist...
  var %i = $cnick(0) | while (%i) { .cnick -r 1 | dec %i }
  if (!%_kte_loading) { %i = 1 | while ($hget(Kte_Restore, CNick- $+ %i)) { .cnick $ifmatch | inc %i } }
  if (!%_kte_loading) && ($hget(Kte_Restore)) {
    ; restoring colors...
    hadd Kte_Theme Colors $hget(Kte_Restore, Colors)
    hadd Kte_Theme RGBColors $hget(Kte_Restore, RGBColors)
    kte_apply_colors
    ; restoring fonts...
    hadd Kte_Theme FontDefault $hget(Kte_Restore, FontDefault)
    hadd Kte_Theme FontChan $hget(Kte_Restore, FontChan)
    hadd Kte_Theme FontQuery $hget(Kte_Restore, FontQuery)
    kte_apply_fonts
    ; restoring timestamp...
    if ($hget(Kte_Restore, Timestamp)) { .timestamp $ifmatch }
    if ($hget(Kte_Restore, TimestampFormat)) { .timestamp -f $ifmatch }
    hdel -w Kte_Theme *
  }
  ; removing background... channels
  scon -a var %i = $!chan(0) $chr(124) while (%i) $chr(123) background -ex $!chan(%i) $chr(124) dec % $+ i $chr(125)
  remini $+(", $mircini, ") background wchannel
  ; query windows
  scon -a var %i = $!query(0) $chr(124) while (%i) $chr(123) background -ex $!query(%i) $chr(124) dec % $+ i $chr(125)
  scon -a var %i = $!chat(0) $chr(124) while (%i) $chr(123) background -ex $!chat(%i) $chr(124) dec % $+ i $chr(125)
  remini $+(", $mircini, ") background wquery
  ; others
  scon -a background -sx $chr(124) background -gx $chr(124) background -mx $chr(124) background -dx
  scon -a background -lx $chr(124) background -hx $chr(124) background -ux
  ; finishing...
  if (!%_kte_loading) && ($isfile($kte_file(Kte-DefTheme.dat))) { hload -ob Kte_Theme $kte_file(Kte-DefTheme.dat) }
  unset %_kte_apply
}

alias -l kte_buildfile {
  var %w = @kte_File, %a = aline %w, %i = 1, %t, %rawt, %reali = 0, %realt, %ln, %x, %delta, %lastset, %lntmp
  kte_status_show 0 Preparing to build script...
  window -hliB %w
  loadbuf %w $kte_file(Kte-Dyn.dat)
  set -n %kte__pre $dll($kte_dll, MTSPrecompile, $kte__cl($remove($hget(Kte_Theme, Prefix), <pre>)))
  %t = $line(%w, 0)
  %rawt = $hmatch(Kte_Theme, Raw.???, 0)
  %realt = $calc(%t + %rawt)
  kte_buildfile_loadsnippets
  kte_status_show 1 Building theme script...
  :loop_start | ; hack to overcome a mIRC 6.15 issue
  while (%i <= %t) {
    inc %reali
    kte_status_prog %reali %realt
    %ln = $line(%w, %i)
    if (kte_set isin %ln) && ($gettok(%ln, 1, 32) == kte_set) {
      %lastset = %ln
      dline %w %i
      %delta = $kte_buildfile_usesnippets(%ln, %w, %i)
      inc %i %delta
      inc %t $calc(%delta - 1)
      goto loop_start
    }
    elseif (kte_unset isin %ln) && ($gettok(%ln, 1, 32) == kte_unset) {
      if ($numtok(%ln, 32) = 1) { rline %w %i $kte_buildfile_unsetvars(%lastset) }
      elseif ($gettok(%ln, 2, 32) == +) { rline %w %i $kte_buildfile_unsetvars(%lastset $gettok(%ln, 3-, 32)) }
      else { rline %w %i $kte_buildfile_unsetvars(%ln) }
    }
    elseif (kte:: isin %ln) { %x = $wildtok(%ln, kte::?*, 1, 32) }
    ;elseif ($gettok(%ln, 1, 32) == #KteDyn#) { rline %w %i $kte_dyn_ [ $+ [ $gettok(%ln, 2, 32) ] ] }
    if (%x) {
      %x = $numtok(%ln, 32)
      while (%x) {
        if (kte::?* iswm $gettok(%ln, %x, 32)) {
          if ($kte_pcomp($mid($gettok(%ln, %x, 32), 6)) != $null) {
            set -n %lntmp $ifmatch
            if ($gettok(%ln, $calc(%x + 1), 32) == !) { %ln = $deltok(%ln, $calc(%x + 1), 32) }
            else { %lntmp = %lntmp $chr(124) haltdef }
            %ln = $puttok(%ln, %lntmp, %x, 32)
          }
          else {
            %ln = $deltok(%ln, %x, 32)
            if ($gettok(%ln, %x, 32) == !) { %ln = $deltok(%ln, %x, 32) }
            if ($gettok(%ln, $calc(%x - 1), 32) == |) { %ln = $deltok(%ln, $calc(%x - 1), 32) | dec %x }
          }
          break
        }
        dec %x
      }
      %x =
      if (* !iswm %ln) || (%ln == $chr(32)) { dline %w %i | goto loop_start }
      rline %w %i %ln
    }
    inc %i
  }
  if ($hget(kte_snippets)) { hfree kte_snippets }

  var %list = Echo EchoTarget Error, %i = 1, %t = $numtok(%list, 32), %item
  while (%i <= %t) {
    %item = $gettok(%list, %i, 32)
    aline %w alias -l kte:: $+ %item $kte_pcomp(%item)
    inc %i
  }
  %i = 1
  while ($hmatch(Kte_Theme, Raw.???, %i)) {
    kte_status_prog %reali %realt
    %item = $ifmatch
    aline %w alias -l kte:: $+ %item $kte_pcomp(%item)
    inc %i
    inc %reali
  }
  savebuf %w $kte_usrfile(Kte-Dyn.mrc)
  close -@ %w
  unset %kte__*
}
alias -l kte_pcomp {
  var %v | set -n %v $hget(Kte_Theme, $1)
  if ($gettok(%v, 1, 32) == !Script) { set -n %v $kte_cl($gettok(%v, 2-, 32)) }
  elseif (* iswm %v) { %v = % $+ :echo $dll($kte_dll, MTSPrecompile, $kte__cl(%v)) $!+  % $+ :comments }
  if ($istok(%v, % $+ ::pre, 32)) && (* iswm %kte__pre) {
    while ($findtok(%v, % $+ ::pre, 1, 32)) { set -n %v $puttok(%v, %kte__pre, $ifmatch, 32) }
  }
  while ($regsub(%v, /((\s|\A)[^$%\x28,\[\]][^\x20\x29,]*) \$\+ ([^$%\[\]]\S*(\s|\Z))/, \1\3, %v) > 0) { }
  return %v
}

; this will cache some pieces of code that are used a lot
alias -l kte_buildfile_loadsnippets {
  var %h = kte_snippets, %a = hadd %h, %stdline, %set = set -nu1 % $+ ::, %| = $chr(124), %pt
  if ($hget(%h)) { hfree %h }
  set -n %pt $dll($kte_dll, MTSPrecompile, $kte__cl($hget(Kte_Theme, ParenText)))
  hmake %h 8
  %stdline = %set $+ me $!me %| %set $+ server $!server %| %set $+ port $!port
  ; "pre" and "colors" are automatically added with "std"
  if ($hget(Kte_Theme, Prefix) != $null) { %a pre %set $+ pre $dll($kte_dll, MTSPrecompile, $kte__cl($hget(Kte_Theme, Prefix))) }
  if ($hget(Kte_Theme, BaseColors) != $null) {
    var %ln = $ifmatch, %i = 1, %t = $numtok(%ln, 44), %rln
    while (%i <= %t) {
      %rln = %rln %| $+(%set, c, %i) $gettok(%ln, %i, 44)
      inc %i
    }
    ;%a colors %set $+ c1 $1 %| %set $+ c2 $2 %| %set $+ c3 $3 %| %set $+ c4 $4
    %a colors $gettok(%rln, 2-, 32)
  }
  %a std %stdline
  %a nick %set $+ nick $!nick
  %a chan %set $+ chan $!chan
  %a address %set $+ address $!address
  %a target %set $+ target $!target
  %a chanstd if ($nick($chan, $!nick).pnick != $!nick) $chr(123) %set $+ cmode $!left($ifmatch, 1) $chr(125) %| %set $+ cnick $!nick($chan, $!nick).color
  %a parentext if (* iswm % $+ ::text) $chr(123) %set $+ parentext %pt $chr(125)
}

; $kte_buildfile_usesnippets(<line>, <window>, <insert-pos>)
; return the number of lines added
alias -l kte_buildfile_usesnippets {
  var %i = 2, %t = $numtok($1, 32), %item, %nlines = 0, %w = $2, %p = $3
  while (%i <= %t) {
    %item = $gettok($1, %i, 32)
    if ($hget(kte_snippets, %item)) { iline %w %p $ifmatch | inc %p | inc %nlines }
    if (%item == std) {
      if ($hget(kte_snippets, pre)) { iline %w %p $ifmatch | inc %p | inc %nlines }
      if ($hget(kte_snippets, colors)) { iline %w %p $ifmatch | inc %p | inc %nlines }
    }
    if (%item == chanstd) {
      if ($hget(kte_snippets, chan)) { iline %w %p $ifmatch | inc %p | inc %nlines }
    }
    inc %i
  }
  return %nlines
}

alias -l kte_buildfile_unsetvars {
  var %vars = $gettok($1, 2-, 32)
  if ($findtok(%vars, std, 1, 32)) { %vars = $deltok(%vars, $ifmatch, 32) me server port pre c? }
  if ($findtok(%vars, chanstd, 1, 32)) { %vars = $deltok(%vars, $ifmatch, 32) chan cmode cnick }
  if ($istok(%vars, parentext, 32)) { %vars = %vars text }
  return unset % $+ :echo $iif((%vars), $+(%, ::, $replace(%vars, $chr(32), $+($chr(32), %, ::))))
}

; $kte_cl(str <text>)  - replaces base colors for script code
alias -l kte_cl {
  var %v | set -n %v $1
  tokenize 44 $hget(Kte_Theme, BaseColors)
  while ($findtok(%v, % $+ ::c1, 1, 32)) { set -n %v $puttok(%v, $1, $ifmatch, 32) }
  while ($findtok(%v, % $+ ::c2, 1, 32)) { set -n %v $puttok(%v, $2, $ifmatch, 32) }
  while ($findtok(%v, % $+ ::c3, 1, 32)) { set -n %v $puttok(%v, $3, $ifmatch, 32) }
  while ($findtok(%v, % $+ ::c4, 1, 32)) { set -n %v $puttok(%v, $4, $ifmatch, 32) }
  return %v
}
; $kte__cl(str <text>)  - replaces base colors for simple event lines
alias -l kte__cl {
  var %v | set -n %v $1
  tokenize 44 $hget(Kte_Theme, BaseColors)
  return $replace(%v, <c1>, $1, <c2>, $2, <c3>, $3, <c4>, $4)
}


; Loading...

alias -l kte_apply_colors {
  var %h = Kte_Theme, %hx = Kte_Data, %i, %colors = back action ctcp high info info2 invite join kick mode nick normal notice notify other own $&
    part quit topic wallops whois edit editbox-t list listbox-t gray title inactive
  if ($isbit(%_kte_apply, 3)) {
    kte_status_show 1 $iif((%_kte_loading), Applying, Restoring) colors...
    if ($hget(%h, Colors)) {
      var %cl = $ifmatch, %i = 1, %t = $numtok(%cl, 44)
      if ($numtok(%colors, 32) < %t) { %t = $ifmatch }
      while (%i <= %t) { kte_status_prog %i %t | kte_color $gettok(%colors, %i, 32) $gettok(%cl, %i, 44) | inc %i }
      if ($numtok(%cl, 44) < 28) && ($numtok(%cl, 44) >= 22) { kte_color inactive $gettok(%cl, 22, 44) }
    }
    else {
      var %i = 1, %t = $numtok(%colors, 32)
      while (%i <= %t) { kte_color $gettok(%colors, %i, 32) $gettok(0 6 4 5 2 3 3 3 3 3 3 1 5 7 6 1 3 2 3 5 1 0 1 0 1 15 6 0, %i, 32) | inc %i }
    }
    kte_status_show 1 Defining RGB values...
    if ($hget(%h, RGBColors)) {
      var %cl = $ifmatch, %i = 0, %ccl, %re | %re = /^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}$/
      while (%i <= 15) {
        kte_status_prog %i %t | %ccl = $gettok(%cl, $calc(%i + 1), 32)
        if ($regex(%ccl, %re)) { kte_color %i $rgb( [ %ccl ] ) } | else { kte_color -r %i }
        inc %i
      }
    }
  }
  ; do not apply nicklist if restoring previous colors
  if (%_kte_loading) && ($isbit(%_kte_apply, 6)) {
    kte_status_show 0 Applying nicklist colors...
    var %i = $cnick(0) | while (%i) { .cnick -r 1 | dec %i }
    if ($hget(%h, CLineMe) isnum) { .cnick -an $!me $calc($ifmatch % 16) }
    if ($hget(%h, CLineEnemy) isnum) { .cnick -i * $calc($ifmatch % 16) }
    if ($hget(%h, CLineFriend) isnum) {
      .cnick -o * $calc($ifmatch % 16) | .cnick -v * $calc($ifmatch % 16)
      .cnick -p * $calc($ifmatch % 16) | .cnick -y * $calc($ifmatch % 16)
    }
    kte_apply_colors_modes
    if ($hget(%h, CLineRegular) isnum) { .cnick -n * $calc($ifmatch % 16) }
  }
}
alias -l kte_apply_colors_modes {
  ; mixes up modes that use the same color
  var %h = Kte_Theme, %modes = Owner .;Op @;HOp % $+ ;Voice +, %i = 1, %t = $numtok(%modes, 59), %cl, %cllist
  while (%i <= %t) {
    tokenize 32 $gettok(%modes, %i, 59)
    if ($hget(%h, CLine $+ $1) isnum) {
      %cl = $calc($ifmatch % 16)
      ; blah S2FtZWsgbWFkZSBpdA== ;)
      if ($wildtok(%cllist, %cl *, 1, 59)) { %cllist = $instok($remtok(%cllist, $ifmatch, 1, 59), $ifmatch $+ $2, 1, 59) }
      else { %cllist = $instok(%cllist, %cl $2, 1, 59) }
    }
    inc %i
  }
  %i = $numtok(%cllist, 59) | while (%i) { .cnick * $gettok(%cllist, %i, 59) | dec %i }
}
alias -l kte_color tokenize 46 $+($replace($1, -, $chr(32)), ., $2) | if ($color($1) != $2) { color $1-2 }

alias -l kte_apply_fonts {
  var %h = Kte_Theme, %write = writeini $+(", $mircini, ") fonts, %nserv, %i, %j, %k, %p, %applied
  kte_status_show 0 Applying fonts...
  if ($hget(%h, FontDefault)) {
    var %font = $ifmatch, %f = $iif((b isin $gettok(%font, 3, 44)), b), %fnt = $gettok(%font, 2, 44) $gettok(%font, 1, 44), %fini = $kte_mkinifont(%font)
    if ($hget(Kte_Data, FRep.Status)) && ($hget(Kte_Data, FRep.Rep. $+ $replace($gettok(%font, 1, 44), $chr(32), \~)) != $null) {
      %fnt = $ifmatch | %font = $puttok(%font, %fnt, 1, 44)
    }
    %nserv = $scon(0)
    while (%nserv) {
      scon %nserv
      font $+(-s, %f) %fnt
      dec %nserv
    }
    if ($window(Finger Window)) { font -g $+ %f %fnt } | else { %write ffinger %fini }
    %write flinks %fini | %write flist %fini | %write fwwwlist %fini | %write fnotify %fini
    if (!$hget(%h, FontChan)) { hadd %h FontChan %font }
    if (!$hget(%h, FontQuery)) { hadd %h FontQuery %font }
  }
  if ($hget(%h, FontChan)) {
    var %font = $ifmatch
    if ($hget(Kte_Data, FRep.Status)) && ($hget(Kte_Data, FRep.Rep. $+ $replace($gettok(%font, 1, 44), $chr(32), \~)) != $null) {
      %font = $puttok(%font, $ifmatch, 1, 44)
    }
    %nserv = $scon(0)
    %p = -d
    if (b isin $gettok(%font, 3, 44)) { %p = %p $+ b }
    %applied = 0
    while (%nserv) {
      scon %nserv
      %i = $chan(0)
      inc %applied %i
      while (%i) { font %p $chan(%i) $gettok(%font, 2, 44) $gettok(%font, 1, 44) | dec %i }
      dec %nserv
    }
    if (!%applied) { %write fchannel $kte_mkinifont(%font) }
  }
  if ($hget(%h, FontQuery)) {
    var %font = $ifmatch
    if ($hget(Kte_Data, FRep.Status)) && ($hget(Kte_Data, FRep.Rep. $+ $replace($gettok(%font, 1, 44), $chr(32), \~)) != $null) {
      %font = $puttok(%font, $ifmatch, 1, 44)
    }
    %nserv = $scon(0)
    %p = -d
    if (b isin $gettok(%font, 3, 44)) { %p = %p $+ b }
    %applied = 0
    while (%nserv) {
      scon %nserv
      var %i = $query(0), %j = $chat(0), %k = $fserv(0)
      inc %applied $calc(%i + %j + %k)
      while (%i) { font %p $query(%i) $gettok(%font, 2, 44) $gettok(%font, 1, 44) | dec %i }
      while (%j) { font %p = $+ $chat(%j) $gettok(%font, 2, 44) $gettok(%font, 1, 44) | dec %j }
      while (%j) { font %p = $+ $fserv(%k) $gettok(%font, 2, 44) $gettok(%font, 1, 44) | dec %j }
      dec %nserv
    }
    if (!%applied) { %write fquery $kte_mkinifont(%font) }
    %write fmessage $kte_mkinifont(%font)
  }
}
alias -l kte_mkinifont {
  tokenize 44 $1
  var %weight = $iif((b isin $3), 700, 400), %h = $2
  if (%h < 0) {
    ; my attemp to convert negative size -> height -> real size...
    var %h = $int($calc($2 * $height(A, $1, 1000) / -1000 + 0.999)), %n = 10, %diff
    while (%n) {
      %diff = $calc($height(A, $1, %h) - $height(A, $1, $2))
      if (!%diff) { break } | elseif (%diff > 0) { dec %h } | else { inc %h }
      dec %n
    }
  }
  return $+($1, $chr(44), $calc(%weight + %h), $chr(44), 1)
}

alias -l kte_apply_bg {
  var %h = Kte_Theme, %dir = $nofile($1-), %fn, %i, %write = writeini $+(", $mircini, ") background, %applied, %c
  kte_status_show 1 Applying background pictures...
  if ($isbit(%_kte_apply, 2)) {
    ; channels
    kte_status_prog 1 5
    if ($hget(%h, ImageChan)) {
      var %ln = $ifmatch, %p = -e $+ $kte_imgpos(%ln), %fn = $+(", %dir, $gettok(%ln, 2-, 32), "), %c = $scon(0), %applied = 0
      while (%c) {
        scon %c
        %i = $chan(0)
        if (%i) { %applied = 1 }
        while (%i) { $kte_setbg(%p, $chan(%i), %fn) | dec %i }
        dec %c
      }
      if (!%applied) { %write wchannel $+($shortfn(%fn), $chr(44), $calc($findtok(center fill normal stretch tile photo, $gettok(%ln, 1, 32), 1, 32) - 1)) }
    }
    ; query windows
    kte_status_prog 2 5
    if ($hget(%h, ImageQuery)) {
      var %ln = $ifmatch, %p = -e $+ $kte_imgpos(%ln), %fn = $+(", %dir, $gettok(%ln, 2-, 32), "), %c = $scon(0), %applied = 0
      $kte_setbg(%p $+ g, %fn)
      while (%c) {
        scon %c
        %i = $query(0)
        if (%i) { %applied = 1 }
        while (%i) { $kte_setbg(%p, $query(%i), %fn) | dec %i }
        dec %c
      }
      if (!%applied) { %write wquery $+($shortfn(%fn), $chr(44), $calc($findtok(center fill normal stretch tile photo, $gettok(%ln, 1, 32), 1, 32) - 1)) }
      %c = $scon(0) | %applied = 0
      while (%c) {
        scon %c
        %i = $chat(0)
        if (%i) { %applied = 1 }
        while (%i) { $kte_setbg(%p, = $+ $chat(%i), %fn) | dec %i }
        dec %c
      }
      if (!%applied) { %write wchat $+($shortfn(%fn), $chr(44), $calc($findtok(center fill normal stretch tile photo, $gettok(%ln, 1, 32), 1, 32) - 1)) }
    }
    ; status, finger and mdi
    kte_status_prog 3 5
    if ($hget(%h, ImageStatus)) { $kte_setbg(-sg $+ $kte_imgpos($ifmatch), $+(", %dir, $gettok($ifmatch, 2-, 32), ")) }
    if ($hget(%h, ImageMirc)) { $kte_setbg(-m $+ $kte_imgpos($ifmatch), $+(", %dir, $gettok($ifmatch, 2-, 32), ")) }
  }
  if ($isbit(%_kte_apply, 10)) {
    ; toolbar, switchbar
    kte_status_prog 4 5
    if ($hget(%h, ImageToolbar)) { $kte_setbg(-l, $+(", %dir, $gettok($ifmatch, 2-, 32), ")) }
    if ($hget(%h, ImageSwitchbar)) { $kte_setbg(-h, $+(", %dir, $gettok($ifmatch, 2-, 32), ")) }
  }
  if ($isbit(%_kte_apply, 9)) {
    kte_status_prog 5 5
    if ($hget(%h, ImageButtons)) { $kte_setbg(-u, $+(", %dir, $ifmatch, ")) }
  }
  else { kte_status_prog 5 5 }
}
; //$kte_setbg(<switches>, <window>, <filename>)
; //$kte_setbg(<switches>, <filename>)
alias -l kte_setbg {
  ; /background is really buggy, this is my "hack"
  if ($0 == 3) && ($isfile($3)) {
    background $remove($1, e) $2-3
    background $remove($1, e) $2-3
    background $1-3
    remini $+(", $mircini, ") background $2
  }
  elseif ($0 == 2) && ($isfile($2)) { background $1- }
}
alias -l kte_imgpos return $mid(cfnrtp, $findtok(center fill normal stretch tile photo, $gettok($1, 1, 32), 1, 32), 1)

alias -l kte_status_open {
  var %w = @Kte_Status, %cw = $calc($dbuw * 100), %ch = $calc($dbuh * 24)
  window -hndkpfCBi +fL %w -1 -1 %cw %ch
  drawrect -rf %w $rgb(face) 0  0 0 %cw %ch
  window -o %w
  window -hpBi +d @Kte_Cover 0 0 $window(-3).w $window(-3).h
  drawrect -nrf @Kte_Cover $rgb(128, 128, 128) 0  0 0 $window(-3).w $window(-3).h
  window -a @Kte_Cover
}
alias -l kte_status_close close -@ @Kte_Status @Kte_Cover
alias -l kte_status_show {
  var %w = @Kte_Status, %cw = $window(@Kte_Status).dw
  drawrect -nrf %w $rgb(face) 0  0 0 %cw $window(@Kte_Status).dh
  drawtext -nro %w $rgb(text)  Tahoma -8  $calc((%cw - $width($2-, Tahoma, -8, 1, 0)) / 2) $calc(4 * $dbuh)  $2-
  if ($1) {
    var %rx = $calc(3 * $dbuw), %ry = $calc(15 * $dbuh), %rw = $calc(94 * $dbuw), %rh = $calc(5 * $dbuh), %xywh = %rx %ry %rw %rh
    drawrect -nrf %w $rgb(hilight) 0 %xywh
    drawrect -nr %w $rgb(shadow) 0 %xywh
    drawline -nr %w $rgb(hilight) 0  $calc(%rx + %rw - 1) $calc(%ry + 1)  $calc(%rx + %rw - 1) $calc(%ry + %rh - 1)  %rx $calc(%ry + %rh - 1)
    ;drawrect -nr %w $rgb(frame) 0 %xywh
  }
  drawdot %w
}
alias -l kte_status_prog {
  var %w = @Kte_Status
  drawrect -rf %w $rgb(0, 0, 128) 0 $calc(3 * $dbuw + 1) $calc(15 * $dbuh + 1) $calc((94 * $dbuw - 2) * $1 / $2) $calc(5 * $dbuh - 2)
}

; the dialog

alias -l kte_dlg if ($dialog($2)) { dialog -v $2 } | else { dialog $1-2 $2 }

dialog -l kte_load {
  title "Load theme"
  size -1 -1 221 159
  option dbu
  button "&...", 3, 52 1 10 10
  text "", 4, 0 0 0 0, hide
  text "&Themes available:", 1, 3 3 43 7
  list 2, 3 12 59 94, sort size vsbar
  text "Apply &scheme:", 20, 3 109 35 7, disable
  list 21, 3 117 59 23, disable size
  tab "Information", 1000, 66 0 152 139
  text "", 19, 75 21 135 7, tab 1000
  box "", 26, 72 16 141 14, tab 1000
  text "Name:", 5, 72 33 16 7, disable tab 1000
  text "", 6, 106 33 107 7, disable tab 1000
  text "Version:", 7, 72 46 19 7, disable tab 1000
  text "", 8, 106 46 107 7, disable tab 1000
  text "Author:", 9, 72 59 18 7, disable tab 1000
  text "", 10, 106 59 107 7, disable tab 1000
  link "", 11, 106 67 107 7, disable tab 1000
  text "URL:", 12, 72 80 13 7, disable tab 1000
  link "", 13, 106 80 107 7, disable tab 1000
  edit "", 14, 72 98 142 30, disable tab 1000 read multi vsbar
  tab "Preview", 1001
  text "Preview:", 15, 72 19 21 7, disable tab 1001
  button "Open bigger &preview", 16, 152 17 60 11, disable tab 1001
  icon 24, 74 33 137 98, $mircexe, 16, tab 1001 noborder
  box "", 17, 73 29 139 103, tab 1001
  text "Double-click here to generate preview", 30, 97 78 91 7, tab 1001 nowrap center
  icon 18, 73 32 139 100, $mircexe, 0, hide tab 1001 noborder
  tab "Apply", 1002
  text "When loading, apply:", 28, 72 19 51 7, tab 1002
  check "&Everything", 29, 139 19 35 8, tab 1002
  check "&Background images", 33, 72 36 57 8, tab 1002
  check "&Colors", 34, 72 46 24 8, tab 1002
  check "Event &messages", 35, 72 56 49 8, tab 1002
  check "F&onts", 36, 72 66 23 8, tab 1002
  check "&Nicklist colors", 37, 139 36 42 8, tab 1002
  check "Soun&ds", 38, 72 76 28 8, hide disable tab 1002
  check "T&imestamp", 39, 139 46 35 8, tab 1002
  check "Toolbar b&uttons", 40, 139 56 47 8, tab 1002
  check "Too&lbar/switchbar bgs", 41, 139 66 63 8, tab 1002
  text "", 32, 72 88 140 20, tab 1002
  box "", 2900, -2 140 225 21
  button "Load", 2901, 136 147 40 10, disable default ok
  button "Close", 2902, 179 147 40 10, cancel
  menu "&File", 43
  item "Change &folder...", 22, 43
  item "E&xplore this folder", 45, 43
  item break, 44, 43
  item "&Settings...", 23, 43
  item break, 47, 43
  item "&Edit theme file", 46, 43
  item break, 48, 43
  item "&Close	Esc", 25, 43
  menu "&Help", 49
  item "&Readme", 31, 49
  item "&About...", 27, 49
}
on *:DIALOG:kte_load:init:0:{
  kte_load_list $kte_thmdir
  if (!$isfile($kte_file(Kte-Readme.txt))) { did -b $dname 31 }
  did -f $dname 2
  var %did = 29 33 34 35 36 37 38 39 40 41, %i = $numtok(%did, 32), %set = $hget(Kte_Data, Apply)
  while (%i) { if ($isbit(%set, %i)) { did -c $dname $gettok(%did, %i, 32) } | dec %i }
  if ($did($dname, 29).state) { did -b $dname 33,34,35,36,37,38,39,40,41 }
  did -o $dname 32 1 It is highly recommended that you apply the theme's event messages; also, most themes look weird if you don't apply their $&
    color settings.
  var %xthmdir = $kte_xthmtmpdir
  if (!$isdir(%xthmdir)) { mkdir $+(", %xthmdir, ") }
}
on *:DIALOG:kte_load:sclick,menu:3,22:{
  var %dir = $sdir($did($dname, 4), Choose theme directory) | did -f $dname 2 | if (!$isdir(%dir)) { return }
  kte_load_list %dir
}
on *:DIALOG:kte_load:sclick:2:kte_load_sel
on *:DIALOG:kte_load:dclick:2:if ($did($dname, 2901).enabled) { dialog -k $dname } | else { beep }
on *:DIALOG:kte_load:sclick:11:var %e = $did($dname, 11) | if (?*@?*.?* iswm %e) { .run mailto: $+ %e } | else { beep }
on *:DIALOG:kte_load:sclick:13:{
  var %url = $did($dname, 13) | if ($chr(32) isin %url) || (!%url) { beep | return }
  if (*:/* !iswm %url) { %url = http:// $+ %url } | .run %url
}
on *:DIALOG:kte_load:sclick:16:did -b $dname 16 | .timerkte_load_preview -o 1 0 kte_preview_click big
on *:DIALOG:kte_load:dclick:18,24,30:.timerkte_load_preview -o 1 0 kte_preview_click
on *:DIALOG:kte_load:sclick:21:kte_load_sel_preview
on *:DIALOG:kte_load:menu:23:kte_dlg -am kte_settings
on *:DIALOG:kte_load:menu:25:dialog -c $dname
on *:DIALOG:kte_load:menu:27:$dialog(kte_about, kte_about, -4)
on *:DIALOG:kte_load:sclick:29:did $iif(($did($dname, 29).state), -b, -e) $dname 33,34,35,36,37,39,40,41
on *:DIALOG:kte_load:menu:31:run $kte_file(Kte-Readme.txt)
on *:DIALOG:kte_load:menu:45:run explorer /n,/e, $+ $did($dname, 4)
on *:DIALOG:kte_load:menu:46:{
  var %fn = $gettok($did($dname, 2, $did($dname, 2, 1).sel), 2, 63)
  if (!$isfile(%fn)) { beep | kte_load_sel } | elseif ($isalias(kthm)) { kthm %fn } | else { run notepad %fn }
}
on *:DIALOG:kte_load:sclick:1000,1001:did -f $dname 2
on *:DIALOG:kte_load:sclick:1002:did -f $dname 29
on *:DIALOG:kte_load:sclick:2901:{
  var %sch, $&
    %apply = $base($+($kte_ds(41), $kte_ds(40), $kte_ds(39), $kte_ds(38), $kte_ds(37), $kte_ds(36), $kte_ds(35), $kte_ds(34), $kte_ds(33), $kte_ds(29)), 2, 10)
  if ($did($dname, 21, 1).sel > 1) { %sch = -s $+ $calc($ifmatch - 1) }
  ; 29 33 34 35 36 37 38 39 40 41
  if (!%apply) { %apply = 1 }
  hadd Kte_Data Apply %apply
  .timer -oi 1 0 if ($isfile( $+ $gettok($did($dname, 2, $did($dname, 2, 1).sel), 2, 63) $+ )) $chr(123) $&
    kte_load %sch $gettok($did($dname, 2, $did($dname, 2, 1).sel), 2, 63) $chr(125)
}

; /kte_preview_click [big]
alias -l kte_preview_click {
  var %d = kte_load
  if (!$dialog(%d)) || (!$did(%d, 2, 1).sel) { return }
  var %f = $gettok($did(%d, 2, $did(%d, 2, 1).sel), 2, 63), %ngz = $kte_gzdir $+ ngzipn.dll
  if (%f = $null) { return }
  if ($dialog(%d).focus = 16) { did -f %d 2 }
  if (!$isfile(%f)) { beep | return }
  if ($1 == big) { did -b %d 16 }
  if (*.mts.gz iswm %f) {
    if (!$isfile(%ngz)) { beep | return }
    if (!$dll(%ngz, unzip, $left(%f, -3))) { beep | return }
    var %of = %f, %f = $left(%f, -3)
  }
  elseif (*.vpk iswm %f) || (*.vpk.gz iswm %f) {
    var %nf = %f
    if (*.gz iswm %f) {
      %nf = $left(%f, -3)
      if (!$isfile(%ngz)) { beep | return }
      if (!$dll(%ngz, unzip, $left(%f, -3))) { beep | return }
    }
    kte_vpak_extract $+(", %nf, ") $+(", $kte_xthmtmpdir, ") | if (*.gz iswm %f) { .remove $+(", %nf, ") }
    var %killtmp = $true
    if ($result) { beep | goto clear }
    var %of = %f, %f = $findfile($kte_xthmtmpdir, *.mts, 1, 9)
    if (!%f) { beep | goto clear }
  }
  elseif (*.zip iswm %f) {
    var %munz = $+(", $kte_munzdir, mUnzip.dll")
    if (!$isfile(%munz)) { beep | return }
    if (S_OK* !iswm $dll(%munz, Unzip, -Q2do $+(", %f, ") $+(", $kte_xthmtmpdir, "))) { beep | return }
    var %killtmp = $true
    var %of = %f, %f = $findfile($kte_xthmtmpdir, *.mts, 1, 9)
    if (!%f) { beep | goto clear }
  }
  set -u %_kte_realname %of
  dll $kte_dll SetBusyState 1
  $+(kte_load_, $1, preview) %f

  :clear
  if ($1 == big) { did -e %d 16 }
  if (%of) { .remove $+(", %f, ") }
  if (%killtmp) { kte_killtmp }
  dll $kte_dll SetBusyState 0
}

alias -l kte_load_list {
  var %d = kte_load, %s, %gzexists = $isfile($kte_gzdir $+ ngzipn.dll)
  did -r %d 2
  %s = $findfile($1-, *.mts, 0, 9, did -a %d 2 $nopath($1-) $+($str( , 30), ?, $1-))
  if (%gzexists) { inc %s $findfile($1-, *.mts.gz, 0, 9, did -a %d 2 $nopath($1-) $+($str( , 30), ?, $1-)) }
  inc %s $findfile($1-, *.vpk, 0, 9, did -a %d 2 $nopath($1-) $+($str( , 30), ?, $1-))
  if (%gzexists) { inc %s $findfile($1-, *.vpk.gz, 0, 9, did -a %d 2 $nopath($1-) $+($str( , 30), ?, $1-)) }
  if ($isfile($kte_munzdir $+ mUnzip.dll)) { inc %s $findfile($1-, *.zip, 0, 9, did -a %d 2 $nopath($1-) $+($str( , 30), ?, $1-)) }
  if (%s) {
    if ($didwm(%d, 2, $+(*, $str( , 30), ?, $longfn($hget(Kte_Data, CurOTheme))))) { did -c %d 2 $ifmatch }
    else { did -c %d 2 1 }
    kte_load_sel
  }
  else {
    did -b %d 5,6,7,8,9,10,11,12,13,14,15,16,20,21,2901
    did -r %d 6,8,10,11,13,14,19,21
    did -h %d 18,30
    did -v %d 24,17
  }
  did -o %d 4 1 $1-
}

alias -l kte_load_sel {
  var %d = kte_load, %f = $gettok($did(%d, 2, $did(%d, 2, 1).sel), 2, 63), %mtsver, %ln, %ln = $readn, %df = %f, $&
    %ngz = $+(", $kte_gzdir, ngzipn.dll"), %cache = $kte_cachedir $+ thminfo.ini, %top = $hash($lower($longfn(%f)), 32), $&
    %t.gotinfo = $false, %t.name, %t.version, %t.author, %t.email, %t.website, %t.description
  did $iif((*.mts iswm %f), -e, -b) %d 46
  if ($width(%df, MS Shell Dlg, -8, 0, 0) > $calc($dbuw * 134)) {
    %df = $puttok(%df, ..., 2, 92)
    while ($width(%df, MS Shell Dlg, -8, 0, 0) > $calc($dbuw * 134)) { %df = $deltok(%df, 3, 92) | if ($numtok(%df, 92) <= 3) { break } }
  }
  did -o %d 19 1 %df
  did -r %d 6,8,10,11,13,14
  if (!$isfile(%f)) { did -o %d 6 1 (file not found) | did -b %d 14,16,20,21,2901 | did -v %d 17 | did -h %d 18 | did -r %d 21 | return }
  if ($readini(%cache, %top, Filename) == $gettok($longfn(%f), 1-, 32)) && ($readini(%cache, %top, CRC) == $crc(%f)) {
    %t.gotinfo = $true
    %mtsver = $readini(%cache, %top, MTSVersion)
    %t.name = $readini(%cache, %top, Name)
    %t.version = $readini(%cache, %top, Version)
    %t.author = $readini(%cache, %top, Author)
    %t.email = $readini(%cache, %top, EMail)
    %t.website = $readini(%cache, %top, Website)
    %t.description = $readini(%cache, %top, Description)
    var %schi = 1
    while ($readini(%cache, %top, Scheme $+ %schi) != $null) { var %t.scheme [ $+ [ %schi ] ] | %t.scheme [ $+ [ %schi ] ] = $ifmatch | inc %schi }
  }
  elseif (*.mts.gz iswm %f) {
    if (!$isfile(%ngz)) {
      did -o %d 6 1 (nGZIPn is needed to open this file) | did -b %d 14,16,20,21,2901 | did -v %d 17 | did -h %d 18 | did -r %d 21 | return
    }
    if (!$dll(%ngz, unzip, $left(%f, -3))) {
      did -o %d 6 1 (nGZIPn was unable to extract this file) | did -b %d 14,16,20,21,2901 | did -v %d 17 | did -h %d 18 | did -r %d 21 | return
    }
    var %of = %f, %f = $left(%f, -3)
  }
  elseif (*.vpk iswm %f) || (*.vpk.gz iswm %f) {
    var %nf = %f
    if (*.gz iswm %f) {
      %nf = $left(%f, -3)
      if (!$isfile(%ngz)) {
        did -o %d 6 1 (nGZIPn is needed to open this file) | did -b %d 14,16,20,21,2901 | did -v %d 17 | did -h %d 18 | did -r %d 21 | return
      }
      if (!$dll(%ngz, unzip, $left(%f, -3))) {
        did -o %d 6 1 (nGZIPn was unable to extract this file) | did -b %d 14,16,20,21,2901 | did -v %d 17 | did -h %d 18 | did -r %d 21 | return
      }
    }
    kte_vpak_extract -t $+(", %nf, ") $+(", $kte_xthmtmpdir, ") | if (*.gz iswm %f) { .remove $+(", %nf, ") }
    var %killtmp = $true
    if ($result) { did -o %d 6 1 ( $+ $ifmatch $+ ) | did -b %d 14,16,20,21,2901 | did -v %d 17 | did -h %d 18 | did -r %d 21 | goto clear }
    var %of = %f, %f = $findfile($kte_xthmtmpdir, *.mts, 1, 9)
    if (!%f) { did -o %d 6 1 (invalid theme vPak) | did -b %d 14,16,20,21,2901 | did -v %d 17 | did -h %d 18 | did -r %d 21 | goto clear }
  }
  elseif (*.zip iswm %f) {
    var %munz = $+(", $kte_munzdir, mUnzip.dll")
    if (!$isfile(%munz)) {
      did -o %d 6 1 (mUnzip is needed to open this file) | did -b %d 14,16,20,21,2901 | did -v %d 17 | did -h %d 18 | did -r %d 21 | return
    }
    var %rpl = $dll(%munz, Unzip, -Q2SMo KteInfo *.mts $+(", %f, ") $+(", $kte_xthmtmpdir, "))
    if (S_OK * !iswm %rpl) {
      var %msg = (mUnzip was unable to extract this file)
      if (E_NOMATCH * iswm %rpl) { %msg = (this is not a valid theme zip) }
      did -o %d 6 1 %msg | did -b %d 14,16,20,21,2901 | did -v %d 17 | did -h %d 18 | did -r %d 21 | return
    }
    var %killtmp = $true
    var %of = %f, %f = $findfile($kte_xthmtmpdir, *.mts, 1, 1)
    if (!%f) { did -o %d 6 1 (invalid theme zip) | did -b %d 14,16,20,21,2901 | did -v %d 17 | did -h %d 18 | did -r %d 21 | goto clear }
  }
  if (!%t.gotinfo) {
    %ln = $read(%f, nw, [mts])
    set -n %mtsver $gettok($read(%f, nw, MTSVersion *, %ln), 2-, 32)
    if (!%ln) || (!$istok(1 1.1, $calc(%mtsver), 32)) { goto inv }
    %t.name = $gettok($read(%f, nw, Name *, %ln), 2-, 32)
    %t.version = $gettok($read(%f, nw, Version *, %ln), 2-, 32)
    %t.author = $gettok($read(%f, nw, Author *, %ln), 2-, 32)
    %t.email = $gettok($read(%f, nw, EMail *, %ln), 2-, 32)
    %t.website = $gettok($read(%f, nw, Website *, %ln), 2-, 32)
    %t.description = $gettok($read(%f, nw, Description *, %ln), 2-, 32)
    var %schi = 1
    while ($gettok($read(%f, nw, Scheme $+ %schi *, %ln), 2-, 32) != $null) {
      var %t.scheme [ $+ [ %schi ] ] | %t.scheme [ $+ [ %schi ] ] = $ifmatch | inc %schi
    }
  }
  did -e %d 5,6,7,8,9,10,11,12,13,14,15
  if (!$istok(1 1.1, $calc(%mtsver), 32)) { goto inv }
  if (%t.name != $null) { did -o %d 6 1 %t.name } | else { goto inv }
  did -o %d 8 1 %t.version (standard v $+ %mtsver $+ )
  did -o %d 10 1 %t.author
  did -o %d 11 1 %t.email
  did -o %d 13 1 %t.website
  did -a %d 14 %t.description
  did -c %d 14 1
  did -rac %d 21 (default scheme)
  var %schi = 1
  while ($var(%t.scheme*, %schi).value != $null) { did -a %d 21 $ifmatch | inc %schi }
  if (%f == $longfn($hget(Kte_Data, CurOTheme))) && ($hget(Kte_Data, CurScheme)) { did -c %d 21 $calc($ifmatch + 1) }
  did $iif((%schi > 1), -e, -b) %d 20,21
  if (%of) {
    .remove $+(", %f, ") | if (%killtmp) { kte_killtmp }
    %f = %of
    %cache = $+(", %cache, ")
    writeini %cache %top Filename %f
    writeini %cache %top CRC $crc(%f)
    writeini %cache %top MTSVersion %mtsver
    if (%t.name != $null) { writeini %cache %top Name %t.name }
    if (%t.version != $null) { writeini %cache %top Version %t.version }
    if (%t.author != $null) { writeini %cache %top Author %t.author }
    if (%t.email != $null) { writeini %cache %top EMail %t.email }
    if (%t.website != $null) { writeini %cache %top Website %t.website }
    if (%t.description != $null) { writeini %cache %top Description %t.description }
    var %schi = 1
    while ($var(%t.scheme*, %schi).value != $null) { writeini %cache %top Scheme $+ %schi $ifmatch | inc %schi }
  }
  kte_load_sel_preview
  did -e %d 16,2901
  return
  :inv | did -o %d 6 1 (invalid theme file) | did -b %d 14,16,20,21,2901 | did -v %d 17 | did -h %d 18,24,30 | did -r %d 21
  :clear | if (%of) && ($isfile(%f)) { .remove $+(", %f, ") } | if (%killtmp) { kte_killtmp }
}

on *:SIGNAL:mUnzip_KteInfo:if ($1 == extracted) { dll $+(", $kte_munzdir, mUnzip.dll") Reply stop }

alias -l kte_load_sel_preview {
  var %d = kte_load, %sch, %f = $gettok($did(%d, 2, $did(%d, 2, 1).sel), 2, 63)
  if ($did(%d, 21, 1).sel > 1) { %sch = -S $+ $calc($ifmatch - 1) }
  var %pfn = $+(", $kte_cachedir, $nopath(%f), %sch), %pfnpng = %pfn $+ .png", %pfn = %pfn $+ .bmp"
  if ($_isfile(%pfn)) || ($_isfile(%pfnpng)) {
    var %file = $ifmatch
    if ($pic(%file).size) {
      did -h %d 17,24,30
      did -g %d 18 %file
      did -v %d 18
    }
    else { did -v %d 17,24,30 | did -h %d 18 }
  }
  else { did -v %d 17,24,30 | did -h %d 18 }
}

alias -l kte_killxthm var %x = $findfile($kte_xthmdir, *, 0, 99, .remove $+(", $1-, ")) | kte_rmdir $kte_xthmdir
alias -l kte_killtmp var %x = $findfile($kte_xthmtmpdir, *, 0, 99, .remove $+(", $1-, ")) | kte_rmdir $kte_xthmtmpdir

; preview

alias -l kte_load_preview {
  var %sch, %d = kte_load
  if ($did(%d, 21, 1).sel > 1) { %sch = $calc($ifmatch - 1) }
  var %pfn = $+(", $kte_cachedir, $nopath($iif((%_kte_realname), %_kte_realname, $1-)), $iif((%sch), -S $+ %sch), .bmp"), $&
    %w = @Kte_Preview, %lw = @Kte_Preview-, %cw = $calc(139 * $dbuw), %ch = $calc(100 * $dbuh), %istmp = 0
  if (!$isdir($kte_cachedir)) { mkdir $+(", $kte_cachedir, ") }
  if (!$isbit($hget(Kte_Data, Cache), 1)) { %istmp = 1 }
  window -hkliB %lw
  ; on preview, we must load the scheme first, not after
  if (%sch) && ($read($1-, w, $+([Scheme, %sch, ]))) { loadbuf -tScheme $+ %sch %lw $+(", $1-, ") }
  loadbuf -tmts %lw $+(", $1-, ")
  if ($fline(%lw, ?* !Script ?*, 1)) && ($kte_set(Script)) {
    var %scriptf = $+(", $nofile($1-), $ifmatch, ")
    if ($isfile(%scriptf)) && (!$script($longfn(%scriptf))) { .reload -rs %scriptf }
    else { %scriptf = }
  }
  var %cl = $kte_set(Colors), %rgb = $kte_set(RGBColors), %defcl = 0,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,0,1,0,1,15,6,0
  if ($remove(%cl, $chr(44)) !isnum) { %cl = %defcl }
  else { %cl = $gettok(%cl, 1-, 44) $+ $gettok(%defcl, $calc($numtok(%cl, 44) + 1) $+ -, 44) }
  if ($numtok(%rgb, 32) != 16) {
    %rgb = 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 $&
      128,128,128 208,208,208
  }
  kte_pv Init %cw %ch
  if ($isfile($nofile($1-) $+ $gettok($kte_set(ImageChan), 2-, 32))) {
    window -hpfkniB +d %w -1 -1 %cw %ch
    drawrect -nrf %w $kte_rgb(%cl, %rgb, 1) 0  2 2 %cw %ch
    kte_preview_bg %w $1-
    drawsave %w %pfn
    close -@ %w
    kte_pv SetBg $kte_rgb(%cl, %rgb, 1) %pfn
  }
  else { kte_pv SetBg $kte_rgb(%cl, %rgb, 1) }
  if ($kte_set(FontChan)) || ($kte_set(FontDefault)) {
    var %f, %fsize = $gettok($ifmatch, 2, 44), %fb = $gettok($ifmatch, 3, 44)
    set -n %f $gettok($ifmatch, 1, 44)
    if ("*" iswm %f) { set -n %f $mid(%f, 2, -1) }
    if ($hget(Kte_Data, FRep.Status)) && ($hget(Kte_Data, FRep.Rep. $+ $replace(%f, $chr(32), \~)) != $null) { set -n %f $ifmatch }
    if (%fsize !isnum) { %fsize = -10 }
    if (%fb != b) { var %fb }
    kte_pv SetFont %fb %fsize %f
  }
  else { kte_pv SetFont $iif(($window(Status Window).fontbold), b) $window(Status Window).fontsize $window(Status Window).font }
  kte_pv SetColors %rgb
  kte_preview_text - %lw %cl %rgb
  kte_pv DrawBorder
  ; remove the extension (the DLL will add one on return value)
  %pfn = $deltok($gettok(%pfn, 1, 34), -1, 46)
  kte_pv Save $iif((%istmp), ~) $+ %pfn
  if ($result) {
    var %tfn = $result, %other = $puttok(%tfn, $remtok(bmp png, $gettok(%tfn, -1, 46), 1, 32), -1, 46)
    %pfn = $+(", %tfn, ")
    if ($isfile(%other)) { .remove $+(", %other, ") }
  }
  else { var %pfn }
  kte_pv Cleanup
  close -@ %lw
  if ($script($longfn(%scriptf))) { .unload -rsn %scriptf }
  if ($pic(%pfn).size) { did -h %d 17,24,30 | did -g %d 18 %pfn | did -v %d 18 }
  else { beep | did -v %d 17,24,30 | did -h %d 18 }
  if (%istmp) && ($isfile(%pfn)) { .remove %pfn }
  unset %_kte_*
}
alias -l kte_rgb return $rgb( [ $gettok($2, $calc($gettok($1, $3, 44) + 1), 32) ] )

alias -l kte_load_bigpreview {
  var %sch, %d = kte_load
  if ($did(%d, 21, 1).sel > 1) { %sch = $calc($ifmatch - 1) }
  var %pfn = $+(", $kte_cachedir, $nopath($iif((%_kte_realname), %_kte_realname, $1-)), $iif((%sch), -S $+ %sch), -BIG.bmp"), $&
    %w = @Kte_Preview, %lw = @Kte_Preview-, %cw = $calc(200 * $dbuw), %ch = $calc(180 * $dbuh), %istmp = 1
  if (!$isdir($kte_cachedir)) { mkdir $+(", $kte_cachedir, ") }
  window -hkliB %lw
  ; on preview, we must load the scheme first, not after
  if (%sch) && ($read($1-, w, $+([Scheme, %sch, ]))) { loadbuf -tScheme $+ %sch %lw $+(", $1-, ") }
  loadbuf -tmts %lw $+(", $1-, ")
  if ($fline(%lw, ?* !Script ?*, 1)) && ($kte_set(Script)) {
    var %scriptf = $+(", $nofile($1-), $ifmatch, ")
    if ($isfile(%scriptf)) && (!$script($longfn(%scriptf))) { .reload -rs %scriptf }
    else { %scriptf = }
  }
  var %cl = $kte_set(Colors), %rgb = $kte_set(RGBColors), %defcl = 0,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,0,1,0,1,15,6,0
  if ($remove(%cl, $chr(44)) !isnum) { %cl = %defcl }
  else { %cl = $gettok(%cl, 1-, 44) $+ $gettok(%defcl, $calc($numtok(%cl, 44) + 1) $+ -, 44) }
  if ($numtok(%rgb, 32) != 16) {
    %rgb = 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 $&
      128,128,128 208,208,208
  }
  kte_pv Init %cw %ch
  if ($isfile($nofile($1-) $+ $gettok($kte_set(ImageChan), 2-, 32))) {
    window -hpfkniB +d %w -1 -1 %cw %ch
    drawrect -nrf %w $kte_rgb(%cl, %rgb, 1) 0  2 2 %cw %ch
    kte_preview_bg %w $1-
    drawsave %w %pfn
    close -@ %w
    kte_pv SetBg $kte_rgb(%cl, %rgb, 1) %pfn
  }
  else { kte_pv SetBg $kte_rgb(%cl, %rgb, 1) }
  if ($kte_set(FontChan)) || ($kte_set(FontDefault)) {
    var %f, %fsize = $gettok($ifmatch, 2, 44), %fb = $gettok($ifmatch, 3, 44)
    set -n %f $gettok($ifmatch, 1, 44)
    if ("*" iswm %f) { set -n %f $mid(%f, 2, -1) }
    if ($hget(Kte_Data, FRep.Status)) && ($hget(Kte_Data, FRep.Rep. $+ $replace(%f, $chr(32), \~)) != $null) { set -n %f $ifmatch }
    if (%fsize !isnum) { %fsize = -10 }
    if (%fb != b) { var %fb }
    kte_pv SetFont %fb %fsize %f
  }
  else { kte_pv SetFont $iif(($window(Status Window).fontbold), b) $window(Status Window).fontsize $window(Status Window).font }
  kte_pv SetColors %rgb
  kte_preview_bigtext - %lw %cl %rgb
  kte_pv DrawBorder
  ; remove the extension (the DLL will add one on return value)
  %pfn = $deltok($gettok(%pfn, 1, 34), -1, 46)
  kte_pv Save $iif((%istmp), ~) $+ %pfn
  if ($result) {
    var %tfn = $result, %other = $puttok(%tfn, $remtok(bmp png, $gettok(%tfn, -1, 46), 1, 32), -1, 46)
    %pfn = $+(", %tfn, ")
    if ($isfile(%other)) { .remove $+(", %other, ") }
  }
  else { var %pfn }
  kte_pv Cleanup
  close -@ %lw
  if ($script($longfn(%scriptf))) { .unload -rsn %scriptf }
  if ($pic(%pfn).size) {
    %kte__pfn = %pfn
    $dialog(kte_preview, kte_preview, -4)
    unset %kte__pfn
  }
  else { beep }
  if (%istmp) && ($isfile(%pfn)) { .remove %pfn }
  unset %_kte_*
}

; /kte_preview_bg str <pwnd>, str <filename>
alias -l kte_preview_bg {
  var %set = $kte_set(ImageChan), %style = $gettok(%set, 1, 32), %fn = $+(", $nofile($2-), $gettok(%set, 2-, 32), "), $&
    %dw = $calc($window($1).dw - 4), %dh = $calc($window($1).dh - 4), %px = 2, %py = 2, %pw, %ph
  if (!%set) || (!$istok(center fill normal stretch tile photo, %style, 32)) || (!$pic(%fn).width) { return $false }
  %pw = $pic(%fn).width | %ph = $pic(%fn).height
  if (%style == center) { %px = $calc(2 + (%dw - %pw) / 2) | %py = $calc(2 + (%dh - %ph) / 2) }
  elseif ($istok(fill tile, %style, 32)) { %pw = %dw | %ph = %dh }
  elseif (%style == stretch) {
    if (%pw > %dw) { %ph = $calc(%ph * %dw / %pw) | %pw = %dw }
    if (%ph > %dh) { %pw = $calc(%pw * %dh / %ph) | %ph = %dh }
    %px = $calc(2 + (%dw - %pw) / 2) | %py = $calc(2 + (%dh - %ph) / 2)
  }
  elseif (%style == photo) {
    var %hdw = $calc(%dw * 0.5), %hdh = $calc(%dh * 0.5)
    if (%pw > %hdw) { %ph = $calc(%ph * %hdw / %pw) | %pw = %hdw }
    if (%ph > %hdh) { %pw = $calc(%pw * %hdh / %ph) | %ph = %hdh }
    %px = $calc(2 + %dw - %pw)
  }
  drawpic -ns $+ $iif((%style == tile), l) $1 $int(%px) $int(%py) $int(%pw) $int(%ph) %fn
  unset %_kte_*
  return $true
}

; /kte_preview_text str <pwnd>, str <lwnd>, int[](44) <colors>, (int[3](44))[](32) <rgb>
alias -l kte_preview_text {
  %_kte_time = $calc($ctime - $r(0, 86400))
  var %bcl = $kte_set(BaseColors)
  %::c1 = $gettok(%bcl, 1, 44) | %::c2 = $gettok(%bcl, 2, 44) | %::c3 = $gettok(%bcl, 3, 44) | %::c4 = $gettok(%bcl, 4, 44)
  if ($kte_set(MTSVersion) = 1.1) && ($kte_set(Timestamp) == on) && ($kte_set(TimestampFormat)) { set -n %_kte_timestamp $ifmatch }
  elseif ($calc($kte_set(MTSVersion)) = 1) && ($kte_set(Timestamp)) { if ($ifmatch != off) { set -n %_kte_timestamp $ifmatch } }
  if (*<c*>* iswm %_kte_timestamp) { set -n %_kte_timestamp $replace(%_kte_timestamp, <c1>, %::c1, <c2>, %::c2, <c3>, %::c3, <c4>, %::c4) }
  %::me = $me | if (!%::me) || ($istok(Dude GuY pal, %::me, 32)) { %::me = Myself }
  %::server = irc.kte.kamek.net | %::port = 6667
  .timerkte_kte 1 0 % $+ ::pre = $dll($kte_dll, MTSPrecompile, $kte_set(Prefix)) | .timerkte_kte -e
  %::chan = #Preview | %::target = #Preview
  %:echo = kte_drawpreview

  %_kte_color = $kte_rgb($3, $4-, 8)
  %::nick = %::me
  kte_show JoinSelf

  %_kte_color = $kte_rgb($3, $4-, 12)
  inc %_kte_time $r(1, 5)
  %::nick = Dude | %::cmode = @
  %::text = $gettok(hi welcome wb, $r(1, 3), 32) %::me :)
  kte_show TextChan

  %_kte_color = $kte_rgb($3, $4-, 16)
  inc %_kte_time $r(5, 10)
  %::nick = %::me | %::cmode =
  %::text = $gettok(hi howdy hello, $r(1, 3), 32) Dude
  kte_show TextChanSelf

  %_kte_color = $kte_rgb($3, $4-, 8)
  inc %_kte_time $r(30, 50)
  %::nick = pal
  %::address = $+(palscript@, $r(1, 255), ., $r(0, 255), ., $r(0, 255), ., $r(0, 255))
  kte_show Join

  %_kte_color = $kte_rgb($3, $4-, 21)
  inc %_kte_time $r(10, 20)
  %::realname = Your pal | %::chan = #Preview @#Pals
  %::wserver = %::server | %::serverinfo = Preview server | %::text = | %::isregd = is not | %::isoper = is not
  %::idletime = $r(1, 30) | %::signontime = $asctime($calc(%_kte_time - $r(360, 7200)))
  if ($kte_set(Whois)) { kte_show Whois | kte_show Raw.311 | kte_show Raw.319 | kte_show Raw.312 | kte_show Raw.317 | kte_show Raw.318 }
  else { kte_showr 311 | kte_showr 319 | kte_showr 312 | kte_showr 317 | kte_showr 318 }

  %_kte_color = $kte_rgb($3, $4-, 12)
  inc %_kte_time $r(10, 20)
  %::text = what's up guys?
  %::chan = #Preview
  kte_show TextChan

  inc %_kte_time $r(3, 10)
  %::nick = GuY | %::cmode = + | %::address =
  %::text = the sky, pal
  kte_show TextChan

  %_kte_color = $kte_rgb($3, $4-, 9)
  inc %_kte_time $r(3, 10)
  %::nick = Dude | %::cmode = @ | %::knick = GuY
  %::text = sample kick!
  if ($kte_set(ParenText)) { set -n %::parentext $ifmatch } | else { %::parentext = (<text>) }
  set -n %::parentext $($dll($kte_dll, MTSPrecompile, %::parentext), 2)
  kte_show Kick | %::knick = | %::parentext =

  %_kte_color = $kte_rgb($3, $4-, 2)
  inc %_kte_time $r(40, 180)
  %::text = is away (brb)
  kte_show ActionChan

  :end
  unset %:echo %::*
}
alias -l kte_pv return $dll($kte_dll, Preview $+ $1, $2-)
alias kte_drawpreview kte_pv DrawText %_kte_color %::timestamp $1-
alias -l kte_set {
  var %f = $fline(@Kte_Preview-, $1 *, 1)
  if ($fline(@Kte_Preview-, $1, 1)) { if ($ifmatch < %f) { %f = $ifmatch } }
  return $gettok($line(@Kte_Preview-, %f), 2-, 32)
}
alias -l kte_show {
  if (* iswm $kte_set($1)) {
    var %ln | set -n %ln $kte_set($1) | if (%_kte_timestamp) { %::timestamp = $asctime(%_kte_time, %_kte_timestamp) }
    if ($gettok(%ln, 1, 32) == !Script) { set -n %ln $gettok(%ln, 2-, 32) }
    else { set -n %ln % $+ :echo $dll($kte_dll, MTSPrecompile, %ln) }
    if (%ln) { .timerkte_theme 1 0 %ln | .timerkte_theme -e }
    return 1
  }
}
alias -l kte_showr kte_show Raw. $+ $1 | if (!$result) { kte_show Raw.Other }

alias -l kte_preview_bigtext {
  %_kte_time = $calc($ctime - $r(0, 86400))
  var %bcl = $kte_set(BaseColors)
  %::c1 = $gettok(%bcl, 1, 44) | %::c2 = $gettok(%bcl, 2, 44) | %::c3 = $gettok(%bcl, 3, 44) | %::c4 = $gettok(%bcl, 4, 44)
  if ($kte_set(MTSVersion) = 1.1) && ($kte_set(Timestamp) == on) && ($kte_set(TimestampFormat)) { set -n %_kte_timestamp $ifmatch }
  elseif ($calc($kte_set(MTSVersion)) = 1) && ($kte_set(Timestamp)) { if ($ifmatch != off) { set -n %_kte_timestamp $ifmatch } }
  if (*<c*>* iswm %_kte_timestamp) { set -n %_kte_timestamp $replace(%_kte_timestamp, <c1>, %::c1, <c2>, %::c2, <c3>, %::c3, <c4>, %::c4) }
  %::me = $me | if (!%::me) || ($istok(Dude GuY pal, %::me, 32)) { %::me = Myself }
  %::server = irc.kte.kamek.net | %::port = 6667
  .timerkte_kte 1 0 % $+ ::pre = $dll($kte_dll, MTSPrecompile, $kte_set(Prefix)) | .timerkte_kte -e
  %::chan = #Preview | %::target = #Preview
  %:echo = kte_drawpreview

  var %addr_me, %addr_pal, %addr_guy, %addr_dude, %randip = $($+(@, $r(1, 255), ., $r(0, 255), ., $r(0, 255), ., $r(0, 255)), 0)
  %addr_me = preview $+ $(%randip, 2)
  %addr_guy = guy $+ $(%randip, 2)
  %addr_dude = airc $+ $(%randip, 2)
  %addr_pal = palscript $+ $(%randip, 2)

  %_kte_color = $kte_rgb($3, $4-, 8)
  %::nick = %::me | %::address = %addr_me
  kte_show JoinSelf | %::address =

  %_kte_color = $kte_rgb($3, $4-, 6)
  inc %_kte_time $r(0, 1)
  %::target = %::me
  %::text = now we have a silly topic.
  kte_showr 332

  %::nick = Dude
  %::value = $asctime($calc($ctime - $r(5, 864000)))
  if ($kte_set(Raw.333)) { %::text = %::value }
  else { %::text = Topic set by %::nick on %::value }
  kte_showr 333

  %::value = $asctime($calc($ctime(%::value) - $r(5, 864000)))
  if ($kte_set(Raw.329)) { %::text = %::value }
  else { %::text = Channel was created on %::value }
  kte_showr 329 | %::value = | %::target = %::chan

  %_kte_color = $kte_rgb($3, $4-, 12)
  inc %_kte_time $r(1, 5)
  %::nick = Dude | %::cmode = @
  %::address = %addr_dude
  %::text = $gettok(hi welcome wb, $r(1, 3), 32) %::me :)
  kte_show TextChan

  %_kte_color = $kte_rgb($3, $4-, 16)
  inc %_kte_time $r(5, 10)
  %::nick = %::me | %::cmode =
  %::address = %addr_me
  %::text = $gettok(hi howdy hello, $r(1, 3), 32) Dude
  kte_show TextChanSelf

  %_kte_color = $kte_rgb($3, $4-, 8)
  inc %_kte_time $r(30, 50)
  %::nick = pal
  %::address = %addr_pal
  kte_show Join

  %_kte_color = $kte_rgb($3, $4-, 21)
  inc %_kte_time $r(10, 20)
  %::realname = Your pal | %::chan = #Preview @#Pals
  %::wserver = %::server | %::serverinfo = Preview server | %::text = | %::isregd = is not | %::isoper = is not
  %::idletime = $r(1, 30) | %::signontime = $asctime($calc(%_kte_time - $r(360, 7200)))
  if ($kte_set(Whois)) { kte_show Whois | kte_show Raw.311 | kte_show Raw.319 | kte_show Raw.312 | kte_show Raw.317 | kte_show Raw.318 }
  else { kte_showr 311 | kte_showr 319 | kte_showr 312 | kte_showr 317 | kte_showr 318 }
  %::chan = #Preview

  %_kte_color = $kte_rgb($3, $4-, 12)
  inc %_kte_time $r(10, 20)
  %::text = what's up guys?
  kte_show TextChan

  inc %_kte_time $r(3, 10)
  %::nick = GuY | %::cmode = +
  %::address = %addr_guy
  %::text = the sky, pal
  kte_show TextChan

  %_kte_color = $kte_rgb($3, $4-, 9)
  inc %_kte_time $r(3, 10)
  %::nick = Dude | %::cmode = @ | %::knick = GuY
  %::address = %addr_dude
  %::text = sample kick!
  if ($kte_set(ParenText)) { set -n %::parentext $ifmatch } | else { %::parentext = (<text>) }
  set -n %::parentext $($dll($kte_dll, MTSPrecompile, %::parentext), 2)
  kte_show Kick | %::knick = | %::parentext =

  %_kte_color = $kte_rgb($3, $4-, 10)
  inc %_kte_time $r(40, 180)
  %::text =
  %::modes = +o %::me
  kte_show Mode

  %_kte_color = $kte_rgb($3, $4-, 2)
  inc %_kte_time $r(5, 50)
  %::text = is away (brb)
  kte_show ActionChan

  %_kte_color = $kte_rgb($3, $4-, 16)
  inc %_kte_time $r(5, 10)
  %::nick = %::me
  %::address = %addr_me
  %::text = cya later Dude
  kte_show TextChanSelf

  %_kte_color = $kte_rgb($3, $4-, 13)
  inc %_kte_time $r(0, 2)
  %::nick = Dude | %::cmode =
  %::address = %addr_dude
  %::target = %::me
  %::text = this is a sample notice to tell you I'm away
  kte_show Notice

  %_kte_color = $kte_rgb($3, $4-, 2)
  inc %_kte_time $r(5, 10)
  %::nick = %::me | %::cmode = @
  %::address = %addr_me
  %::text = hates automatic notices
  kte_show ActionChanSelf

  %_kte_color = $kte_rgb($3, $4-, 19)
  inc %_kte_time $r(10, 30)
  %::text = I hate automatic notices
  kte_show Topic

  %_kte_color = $kte_rgb($3, $4-, 7)
  %::nick = pal | %::cmode =
  %::address = %addr_pal
  %::chan = #imaspammah
  kte_show Invite | %::chan = #Preview

  %_kte_color = $kte_rgb($3, $4-, 18)
  %::text = Killed (Banned from this network)
  if ($kte_set(ParenText)) { set -n %::parentext $ifmatch } | else { %::parentext = (<text>) }
  set -n %::parentext $($dll($kte_dll, MTSPrecompile, %::parentext), 2)
  kte_show Quit | %::parentext =

  %_kte_color = $kte_rgb($3, $4-, 8)
  inc %_kte_time $r(1, 50)
  %::nick = GuY
  %::address = %addr_guy
  %::text =
  kte_show Join

  %_kte_color = $kte_rgb($3, $4-, 3)
  inc %_kte_time $r(3, 10)
  %::nick = %::me
  %::address = %addr_me
  %::target = GuY
  %::ctcp = PING
  kte_show CTCPSelf | %::target = %::me

  %_kte_color = $kte_rgb($3, $4-, 3)
  inc %_kte_time 2
  %::nick = GuY
  %::address = %addr_guy
  %::ctcp = PING
  %::text = $duration(2)
  kte_show CTCPReply

  :end
  unset %:echo %::*
}

dialog -l kte_preview {
  title "Theme preview"
  size -1 -1 204 197
  option dbu
  icon $mircexe, 16
  icon 1, 2 2 200 180, $mircexe, 16, noborder
  button "Close", 2902, 162 185 40 10, cancel
}
on *:DIALOG:kte_preview:init:0:{
  if ($pic(%kte__pfn).size) { did -g $dname 1 %kte__pfn }
  else { beep | dialog -x $dname }
}
on *:DIALOG:kte_preview:sclick:0,1:dialog -c $dname

; about

dialog -l kte_about {
  title "About"
  size -1 -1 100 47
  option dbu
  icon $mircexe, 16
  check "3", 1, 0 0 0 0
  icon 2, 3 3 16 16, $mircexe, 0, noborder
  text "Kamek's Theme Engine", 3, 27 3 56 7
  text "", 4, 27 12 70 7
  link "Kamek's MTS page", 5, 27 21 47 7
  box "", 2900, -1 28 102 20
  button "OK", 2902, 58 35 40 10, default ok cancel
}
on *:DIALOG:kte_about:init:0:did -o $dname 4 1 Version $kte_ver for MTS $kte_mtsver
on *:DIALOG:kte_about:rclick:0:.timerkte_about -om 12 100 kte_about_ck
on *:DIALOG:kte_about:sclick:1:var %v = $calc($did($dname, 1) - 1) | did -o $dname 1 1 %v | if (!%v) { dialog -t $dname Cookie! }
on *:DIALOG:kte_about:sclick,dclick:2:did -g $dname 2 $xor($gettok($did($dname, 2), 1, 32), 2) $+(", $mircexe, ")
on *:DIALOG:kte_about:sclick:5:.run http://www3.brinkster.com/ircweb/mts/

alias -l kte_about_ck {
  var %d = kte_about
  if (!$dialog(%d)) { .timerkte_about off | return }
  if (. isin $did(%d, 4)) { did -o %d 4 1 $replace($did(%d, 4), ., ·) }
  elseif (· isin $did(%d, 4)) { did -o %d 4 1 $replace($did(%d, 4), ·, -) }
  elseif (- isin $did(%d, 4)) { did -o %d 4 1 $replace($did(%d, 4), -, $chr(44)) }
  elseif (, isin $did(%d, 4)) { did -o %d 4 1 $replace($did(%d, 4), $chr(44), .) }
}

; settings

dialog -l kte_settings {
  title "Settings"
  size -1 -1 136 104
  option dbu
  icon $mircexe, 16
  check "", 1, 0 0 0 0
  tab "Paths", 1000, 3 0 129 83
  text "&Themes path:", 2, 8 22 33 7, tab 1000
  edit "", 5, 48 20 68 11, tab 1000 read autohs
  button "...", 6, 118 21 10 10, tab 1000
  text "n&GZIPn path:", 3, 8 38 32 7, tab 1000
  edit "", 4, 48 36 68 11, tab 1000 read autohs
  button "...", 9, 118 37 10 10, tab 1000
  text "m&Unzip path:", 31, 8 54 32 7, tab 1000
  edit "", 32, 48 52 68 11, tab 1000 read autohs
  button "...", 33, 118 53 10 10, tab 1000
  tab "Cache", 1001
  text "Cache:", 10, 8 18 17 7, tab 1001
  check "&Previews", 11, 15 28 31 8, tab 1001
  check "Compiled &scripts", 15, 56 28 48 8, tab 1001
  box "", 18, 8 40 121 35, tab 1001
  text "", 7, 11 46 116 13, tab 1001
  button "&Clear cache", 8, 86 62 40 10, tab 1001
  tab "Events", 1002
  text "You can hide the following events by checking their boxes:", 19, 8 18 120 13, tab 1002
  text "On connect:", 20, 8 38 30 7, tab 1002
  check "&Welcome messages", 12, 8 47 57 8, tab 1002
  check "&Statistics (/lusers)", 13, 8 56 53 8, tab 1002
  check "&Message of the day", 14, 8 65 57 8, tab 1002
  text "On join:", 21, 75 38 19 7, tab 1002
  check "&User list (/names)", 16, 75 47 51 8, tab 1002
  check "&Channel info", 17, 75 56 39 8, tab 1002
  tab "Fonts", 1003
  check "&Enable font replacement", 22, 8 18 68 8, tab 1003
  box "", 23, 8 24 53 13, tab 1003
  text "Font", 24, 11 29 11 7, tab 1003
  box "", 25, 60 24 68 13, tab 1003
  text "Replacement", 26, 63 29 32 7, tab 1003
  list 27, 8 38 120 29, tab 1003 sort size vsbar
  button "&Add...", 28, 31 70 30 10, tab 1003
  button "E&dit...", 29, 64 70 30 10, disable tab 1003
  button "&Remove", 30, 97 70 30 10, disable tab 1003
  box "", 2900, -1 85 138 20
  button "OK", 2901, 51 92 40 10, default ok
  button "Cancel", 2902, 94 92 40 10, cancel
}
on *:DIALOG:kte_settings:init:0:{
  var %size = 0, %nf = $findfile($kte_cachedir, *, 0, 1, inc %size $file($1-).size), %i
  did -o $dname 5 1 $kte_thmdir
  did -o $dname 4 1 $kte_gzdir
  did -o $dname 32 1 $kte_munzdir
  if (%nf) {
    did -o $dname 7 1 There $iif((%nf = 1), is, are) currently %nf file $+ $iif((%nf != 1), s) on your cache directory, wasting $kte_size(%size) of $&
      disk space.
  }
  else { did -o $dname 7 1 There are no files on your cache directory. | did -b $dname 8 }
  var %did = 12 13 14 16 17, %i = $numtok(%did, 32), %set = $hget(Kte_Data, Hide)
  while (%i) { if ($isbit(%set, %i)) { did -c $dname $gettok(%did, %i, 32) } | dec %i }
  var %did = 11 15, %i = $numtok(%did, 32), %set = $hget(Kte_Data, Cache)
  while (%i) { if ($isbit(%set, %i)) { did -c $dname $gettok(%did, %i, 32) } | dec %i }
  if ($hget(Kte_Data, FRep.Status)) { did -c $dname 22 }
  else { did -b $dname 27,28 }
  %i = 1 | while ($hmatch(Kte_Data, FRep.Rep.*, %i)) { did -a $dname 27 $kte_frep_disp($mid($ifmatch, 10), $hget(Kte_Data, $ifmatch)) | inc %i }
}
on *:DIALOG:kte_settings:sclick:6:{
  var %dir = $sdir($did($dname, 5), Choose theme directory) | if (!$isdir(%dir)) { return }
  did -o $dname 5 1 %dir | did -c $dname 5 1 $len(%dir + 1)
}
on *:DIALOG:kte_settings:sclick:8:{
  var %x = $findfile($kte_cachedir, *, 0, 1, .remove $+(", $1-, "))
  did -o $dname 7 1 There are no files on your cache directory. | did -b $dname 8
}
on *:DIALOG:kte_settings:sclick:9:{
  var %dir = $sdir($did($dname, 4), Choose nGZIPn.dll directory) | if (!$isdir(%dir)) { return }
  did -o $dname 4 1 %dir | did -c $dname 4 1 $len(%dir + 1)
}
on *:DIALOG:kte_settings:sclick:22:{
  if ($did($dname, 22).state) { did -e $dname 27,28 }
  else { did -b $dname 27,28,29,30 | did -u $dname 27 }
}
on *:DIALOG:kte_settings:sclick:27:did -e $dname 29,30
on *:DIALOG:kte_settings:dclick:27:$dialog(kte_frep_edit, kte_frep, -4)
on *:DIALOG:kte_settings:sclick:28:$dialog(kte_frep_add, kte_frep, -4) | did -f $dname 27
on *:DIALOG:kte_settings:sclick:29:$dialog(kte_frep_edit, kte_frep, -4) | did -f $dname 27
on *:DIALOG:kte_settings:sclick:30:{
  var %s = $did($dname, 27, 1).sel
  did -d $dname 27 %s
  if ($did($dname, 27).lines >= %s) { did -c $dname 27 %s }
  elseif ($did($dname, 27).lines) { did -c $dname 27 $calc(%s - 1) }
  else { did -b $dname 29,30 }
}
on *:DIALOG:kte_settings:sclick:33:{
  var %dir = $sdir($did($dname, 4), Choose mUnzip.dll directory)
  if (!$isdir(%dir)) { return }
  did -o $dname 32 1 %dir
  did -c $dname 32 1 $len(%dir + 1)
}
on *:DIALOG:kte_settings:sclick:1000:did -f $dname 1
on *:DIALOG:kte_settings:sclick:1001:did -f $dname 11
on *:DIALOG:kte_settings:sclick:1002:did -f $dname 12
on *:DIALOG:kte_settings:sclick:1003:did -f $dname 22
on *:DIALOG:kte_settings:sclick:2901:{
  var %refresh = 0, %i, %ln
  if ($shortfn($did(kte_load, 4)) == $shortfn($kte_thmdir)) && ($shortfn($did(kte_load, 4)) != $did($dname, 5)) { %refresh = 1 }
  hadd Kte_Data ThmDir $did($dname, 5)
  hadd Kte_Data GZipDir $did($dname, 4)
  hadd Kte_Data mUnzipDir $did($dname, 32)
  hadd Kte_Data Hide $base($+($kte_ds(17), $kte_ds(16), $kte_ds(14), $kte_ds(13), $kte_ds(12)), 2, 10)
  hadd Kte_Data Cache $base($+($kte_ds(15), $kte_ds(11)), 2, 10)
  hadd Kte_Data FRep.Status $kte_ds(22)
  hdel -w Kte_Data FRep.Rep.*
  %i = $did($dname, 27).lines
  while (%i) { %ln = $did($dname, 27, %i) | hadd Kte_Data FRep.Rep. $+ $replace($gettok(%ln, 2, 124), $chr(32), \~) $gettok(%ln, 3, 124) | dec %i }
  if (%refresh) && ($isdir($did($dname, 5))) { kte_load_list $did($dname, 5) }
}
alias -l kte_ds return $did($dname, $1).state
; I know there's $bytes(), but I prefer this one.
alias -l kte_size {
  var %l = $1, %s = bytes
  if (%l = 1) { return 1 byte }
  if (%l > 900) {
    %l = $calc(%l / 1024) | %s = KB
    if (%l > 900) {
      %l = $calc(%l / 1024) | %s = MB
      if (%l > 900) { %l = $calc(%l / 1024) | %s = GB }
    }
  }
  return $round(%l, 2) %s
}
alias -l kte_frep_disp {
  var %a = $replace($1, \~, $chr(32)), %b = $2, %s
  if ($calc($calc(53 * $dbuw) - $width(%a, MS Shell Dlg, -8)) > 5) { %s = $str( , $int($calc($ifmatch / $width( , MS Shell Dlg, -8) - 1.99999))) }
  else { %s = / }
  return %a %s %b $str( , 40) $+(|, %a, |, %b)
}

; add/edit font replacement

dialog -l kte_frep {
  title ""
  size -1 -1 114 46
  option dbu
  icon $mircexe, 16
  text "&Original font:", 1, 3 3 32 7
  combo 2, 39 1 72 50, edit drop
  text "&Replacement:", 3, 3 17 33 7
  combo 4, 39 15 72 30, edit drop
  box "", 2900, -1 27 116 20
  button "OK", 2901, 29 34 40 10, disable default ok
  button "Cancel", 2902, 72 34 40 10, cancel
  text "", 5, 0 0 0 0, hide
}
on *:DIALOG:kte_frep_*:init:0:{
  if ($gettok($dname, 3, 95) == add) { dialog -t $dname Add replacement }
  else {
    dialog -t $dname Edit replacement
    tokenize 124 $did(kte_settings, 27, $did(kte_settings, 27, 1).sel)
    did -o $dname 2 0 $2 | did -o $dname 4 0 $3
    did -o $dname 5 1 $2 | did -e $dname 2901
  }
  didtok $dname 2 59 GwdTE_437;IBMPC;PC8X16;Tahoma
}
on *:DIALOG:kte_frep_*:edit,sclick:2,4:{
  var %txt, %rep, %i = $did($dname, 4).lines | set -n %txt $remove($did($dname, 2), |, \~) | set -n %rep $remove($did($dname, 4), |, \~)
  if ($did = 2) {
    while (%i) { did -d $dname 4 %i | dec %i }
    if ($istok(GwdTE_437;IBMPC;PC8X16, %txt, 59)) { did -a $dname 4 Terminal }
    if (%txt == Tahoma) { did -a $dname 4 Verdana }
  }
  if (%txt = $null) || (%rep = $null) || ((%txt != $did($dname, 5)) && ($didwm(kte_settings, 27, %txt *| $+ %txt $+ |*))) || (%txt == %rep) {
    did -b $dname 2901
  }
  else { did -e $dname 2901 }
}
on *:DIALOG:kte_frep_add:sclick:2901:{
  did -fac kte_settings 27 $kte_frep_disp($remove($did($dname, 2), |, \~), $remove($did($dname, 4), |, \~)) | did -e kte_settings 29,30
}
on *:DIALOG:kte_frep_edit:sclick:2901:{
  did -foc kte_settings 27 $did(kte_settings, 27, 1).sel $kte_frep_disp($remove($did($dname, 2), |, \~), $remove($did($dname, 4), |, \~))
}



; vPak support
; based on Variant's code

; /kte_vpak_extract [-t] [filename.vpk] [Path]
;   This is a MUCH simpler and customized /vPak alias. If you want the original one, look for it at http://www.mircscripts.org/
;   -t  - extract only the first .mts file found
alias -l kte_vpak_extract {
  if ($left($1,1) == -) { var %Options = $1 | tokenize 32 $2- }
  ;Parse command line for long filenames
  if (" isin $1-) { tokenize 34 $1- | set -u %kte_vpakFile $1 | set -u %kte_vpakPath $3 }
  else { set -u %kte_vpakFile $1 | set -u %kte_vpakPath $2- }
  if ($right(%kte_vpakPath,1) != \) { set -u %kte_vpakPath $+(%kte_vpakPath,\) }
  if (!$isfile(%kte_vpakFile)) { return }
  var %Total = $kte_vpak_extractfileList, %Counter = 1, %Line
  if (%Total == BadFile) { return }
  while (%Counter <= %Total) {
    %Line = $hget(kte_vpakFileList,%Counter)
    if (t !isin %Options) || (($gettok(%Line, 1, 32) isnum) && (*.mts iswm $gettok(%Line, 3-, 32))) {
      if ($gettok(%Line,1,32) == DIR) { kte_mkpath $+(%kte_vpakPath,$gettok(%Line,2-,32)) }
      else { kte_mkpath $nofile($+(%kte_vpakPath,$gettok(%Line,3-,32))) | kte_vpak_extractfile $gettok(%Line,1-2,32) $+(%kte_vpakPath,$gettok(%Line,3-,32)) }
      if (t isin %Options) { break }
    }
    inc %Counter
  }
  hfree -w kte_vpak*
}

alias -l kte_vpakVersion return 1.1
alias -l kte_vpakFileVersion return 2
alias -l kte_vpakd2h return $base($longip($replace($1, $chr(32), .)), 10, 16)
alias -l kte_mkpath {
  var %counter = 1
  while (%counter <= $numtok($1-,92)) {
    if (!$isdir($gettok($1-,$+(1-,%counter),92))) { mkdir $+(",$gettok($1-,$+(1-,%counter),92),") }
    inc %counter
  }
}
alias -l kte_vpak_extractfileList {
  ;Read file list to hash table
  if ($hget(kte_vpakFileList)) { hfree kte_vpakFileList } | hmake kte_vpakFileList 20
  bread $+(",%kte_vpakFile,") 0 20 &Header
  var %FilePos = $base($kte_vpakd2h($bvar(&Header,1,4)),16,10), %FileSize = $file(%kte_vpakFile).size,%Counter = 1,%Len
  if ($bvar(&Header,11,1).text != $kte_vpakFileVersion) { return BadFile }
  while (%FilePos < %FileSize) {
    bread $+(",%kte_vpakFile,") %FilePos 1000 &Data
    %Len = $base($kte_vpakd2h($bvar(&Data,1,2)),16,10)
    hadd kte_vpakFileList %Counter $bvar(&Data,3,%Len).text
    inc %FilePos $calc(%Len + 2)
    inc %Counter
  }
  return $calc(%Counter - 1)
}
alias -l kte_vpak_extractfile {
  if ($left($1,1) == -) { var %Options = $1 | tokenize 32 $2- }
  var %BytePos = 0,%BytesRead
  while (%BytePos < $2) {
    bread $+(",%kte_vpakFile,") $calc($1 + %BytePos) 8192 &Bytes
    %BytesRead = $iif($calc(%BytePos + 8192) < $2,8192,$calc($2 - %BytePos))
    bwrite $+(",$3-,") %BytePos %BytesRead &Bytes
    inc %BytePos %BytesRead
  }
}

; event hiding
raw 001:*:kte_hidewcome
raw 002:*:kte_hidewcome
raw 003:*:kte_hidewcome
raw 004:*:kte_hidewcome
raw 005:*:if (!$kte_v(connected)) { kte_hidewcome }
alias -l kte_hidewcome if ($isbit($hget(Kte_Data, Hide), 1)) { haltdef }

raw 250:*:kte_hidelusers
raw 251:*:kte_hidelusers
raw 252:*:kte_hidelusers
raw 253:*:kte_hidelusers
raw 254:*:kte_hidelusers
raw 255:*:kte_hidelusers
raw 256:*:kte_hidelusers
raw 265:*:kte_hidelusers
raw 266:*:kte_hidelusers
alias -l kte_hidelusers if (!$kte_v(connected)) && ($isbit($hget(Kte_Data, Hide), 2)) { haltdef }

raw 372:*:kte_hidemotd
raw 375:*:kte_hidemotd
raw 376:*:kte_hidemotd
raw 377:*:kte_hidemotd
raw 378:*:kte_hidemotd
raw 422:*:kte_hidemotd
alias -l kte_hidemotd if (!$kte_v(connected)) && ($isbit($hget(Kte_Data, Hide), 3)) { haltdef }

alias -l kte_onjoin if ($nick == $me) && ($hget(Kte_Data, Hide)) { kte_v joining $kte_v(joining) $chan }
alias -l kte_left var %jn = $kte_v(joining) | if ($istok(%jn, $1, 32)) { kte_v joining $remtok(%jn, $1, 1, 32) }

raw 353:*:kte_hidenames $3
raw 366:*:kte_hidenames $2
alias -l kte_hidenames if ($istok($kte_v(joining), $1, 32)) && ($isbit($hget(Kte_Data, Hide), 4)) { haltdef }

raw 331:*:kte_hidejinfo $2
raw 332:*:kte_hidejinfo $2
raw 333:*:kte_hidejinfo $2
raw 324:*:kte_hidejinfo $2
raw 329:*:kte_raw329 $2
alias -l kte_raw329 {
  kte_hidejinfo $1
  var %jn = $kte_v(joining)
  if ($findtok(%jn, $1, 1, 32)) { kte_v joining $deltok(%jn, $ifmatch, 32) }
}
alias -l kte_hidejinfo if ($istok($kte_v(joining), $1, 32)) && ($isbit($hget(Kte_Data, Hide), 5)) { haltdef }


alias -l kte_v {
  var %n = $+(c, $cid, :, $1)
  if ($isid) { return $hget(Kte_Data, %n) }
  if ($0 = 1) { hdel Kte_Data %n }
  else { hadd Kte_Data %n $2- }
}

; default /theme.text
#Kte_DefTheme off
alias theme.text {
  var %ln | set -n %ln $hget(Kte_Theme, $1)
  if (!$var(%:echo)) || (* !iswm %ln) { return $false }
  set -nu1 %::me $me | set -u1 %::server $server | set -u1 %::port $port
  set -u1 %::pre * | set -nu1 %::timestamp $timestamp
  if ($gettok(%ln, 1, 32) == !Script) { set -n %ln $deltok(%ln, 1, 32) }
  else { set -n %ln % $+ :echo $dll($kte_dll, MTSPrecompile, %ln) $!+  % $+ :comments }
  if ($istok(%ln, |, 32)) { .timerkte_theme 1 0 %ln | .timerkte_theme -e }
  else { $eval(%ln, 2) }
  unset %::me %::server %::port %::pre %::timestamp
  return $true
}
alias kte_void
#Kte_DefTheme end
