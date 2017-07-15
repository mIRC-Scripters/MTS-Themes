[mts]

; ++ Theme Info
Name Spen
Email hexa@pixelflavors.tk
Author hexa
Script spen.mrc
Scheme1 Black
Website n/a
Version 1.0
MTSVersion  1.1
Description "I can preak up my ears and hear so clearly, the collapse of things and the drop in the sink."

; ++ Color Settings
Colors 00,15,15,07,14,14,15,15,15,15,15,14,15,15,14,01,15,15,15,15,15,00,01,00,01,15,14,00
RGBColors 255,255,255 52,52,52 0,64,128 0,128,0 255,128,128 255,0,0 160,0,160 255,155,0 255,255,128 128,255,128 0,144,144 128,255,255 0,128,255 128,128,255 88,88,88 155,155,155
BaseColors 15,14,07,01

; ++ Nicklist
CLineOwner 01
CLineOP 01
CLineHOP 14
CLineVoice 14
CLineRegular 15

CLineCharOwner 07.
CLineCharOP 07@
CLineCharHOP 07%
CLineCharVoice  07+

; ++ Fonts & Display
FontChan bright,10
FontQuery bright,10
FontDefault bright,10

Prefix <c4>++<c1>
ParenText <c4><lt><c1><text><c4><gt>
Timestamp OFF

; ++ Text Events
ActionChan !script %:echo $+(12,ð) $+(,%::c2,$spenCMode,%::nick) $+(,%::c1,%::text)
ActionChanSelf !script %:echo $+(12,ð) $+(,%::c2,$spenCMode,%::me) $+(,%::c1,%::text)
Notice  <c4>[<c1>notice<c4>!<c2><nick><c4>] <c1><text>
NoticeChan <c4>[<c1>notice<c4>!<c2><target><c4>] <c1><text>
NoticeSelf <c4><gt><gt> <c1>notice<c4>/<c2><nick><c4>: <c1><text>
NoticeSelfChan <c4><gt><gt> <c1>notice<c4>/<c2><target><c4>: <c1><text>
TextChan !script %:echo $+(,%::c3, ,$spenCMode,,%::c2,$spenAlignL(9,%::nick),,%::c2) þ $+(,%::c1,%::text)
TextChanSelf !script %:echo $+(,%::c3, ,$spenCMode,,%::c4,$spenAlignL(9,%::nick),,%::c2) þ $+(,%::c4,%::text)
TextMsg <c4>[<c1>msg<c4>!<c2><target><c4>] <c1><text>
TextMsgSelf <c4><gt><gt> <c1>msg<c4>/<c2><target><c4>: <c1><text>
TextQuery !script %:echo $+(,%::c3,  ,,%::c2,$spenAlignL(9,%::nick),,%::c2) þ $+(,%::c1,%::text)
TextQuerySelf !script %:echo $+(,%::c3,  ,,%::c2,$spenAlignL(9,%::me),,%::c2) þ $+(,%::c1,%::text)

; ++ IRC Events
Ctcp !script %:echo $+(,%::c4,[,,%::c1,ctcp,,%::c4,!,,%::c2,%::nick,,%::c4,],,%::c1) $upper(%::ctcp) %::text
CtcpChan !script %:echo $+(,%::c4,[,,%::c1,ctcp,,%::c4,!,,%::c2,%::nick,,%::c4,$chr(40),,%::c1,%::chan,,%::c4,$chr(41),],,%::c1) $upper(%::ctcp) $lower(%::text)
CtcpChanSelf !script %:echo $+(,%::c4,>,>) $+(,%::c1,ctcp,,%::c4,/,,%::c2,%::chan,,%::c4,:,,%::c1) $upper(%::ctcp) $lower(%::text)
CtcpReply !script %:echo $+(,%::c4,[,,%::c1,ctcpreply,,%::c4,!,,%::c2,%::nick,,%::c4,],,%::c1) $upper(%::ctcp) %::text
CtcpReplySelf !script %:echo $+(,%::c4,>,>) $+(,%::c1,ctcpreply,,%::c4,/,,%::c2,%::chan,,%::c4,:,,%::c1) $upper(%::ctcp) $lower(%::text)
CtcpSelf !script %:echo $+(,%::c4,>,>) $+(,%::c1,ctcp,,%::c4,/,,%::c2,%::nick,,%::c4,:,,%::c1) $upper(%::ctcp) $lower(%::text)
Invite <pre> <c1><nick> <c2>invites you to <c3><chan>
Join !script %:echo %::pre $+(,%::c2,join,,%::c4,$chr(40),$spenAddy($+(,%::c1),$+(,%::c3),%::chan),,%::c4,$chr(41),:,,%::c1) %::nick $+(,%::c4,<,$spenAddy($+(,%::c2),$+(,%::c3),%::address),,%::c4,>) $spenTime
JoinSelf !script %:echo %::pre $+(,%::c2,Now) talking $+(in,,%::c4,:) $+(,%::c1,$spenAddy($+(,%::c1),$+(,%::c3),%::chan))
Kick !script %:echo %::pre $+(,%::c2,kick,,%::c4,$chr(40),,%::c1,%::knick,,%::c4,/,$spenAddy($+(,%::c1),$+(,%::c3),%::chan),,%::c4,$chr(41),:,,%::c1) %::text $+(,%::c2,by) %::nick $spenTime
KickSelf <pre> <c2>You were kicked from <c1><chan> <c2>by <c3><nick><c4>: <c1><text>
Mode !script %:echo %::pre $+(,%::c2,mode,,%::c4,$chr(40),$spenAddy($+(,%::c1),$+(,%::c3),%::chan),,%::c4,$chr(41),:,,%::c1) %::modes $+(,%::c2,by) %::nick $spenTime
ModeUser <pre> <c2>Usermode<c4>:<c1> <modes>
Nick <pre> <c2>nick switch<c4>: <c1><nick> <c4>-<gt> <c1><newnick>
NickSelf <pre> <c2>nick switch<c4>: <c1><nick> <c4>-<gt> <c1><newnick>
NoticeServer !script %:echo $+(,%::c3,!,$spenAddy($+(,%::c2),$+(,%::c3),$lower(%::nick)),,%::c3,!,,%::c1) $iif($gettok(%::text,1,32) == ***,$gettok(%::text,2-,32),%::text)
Notify 04* <c4><nick> <c2>is on IRC<c4>: <c1><text>
Part !script %:echo %::pre $+(,%::c2,part,,%::c4,$chr(40),,%::c1,$spenAddy($+(,%::c1),$+(,%::c3),%::chan),,%::c4,$chr(41),:,,%::c1) %::nick %::parentext $spenTime
Quit !script %:echo %::pre $+(,%::c4,%::nick,,%::c2) has quit $+(IRC,$iif(%::text,$+(,%::c4,:)),,%::c1) %::text $spenTime
Rejoin <pre> <c2>trying to rejoin <c3><chan><c4>...
ServerError <pre> Server r
Topic !script %:echo %::pre $+(,%::c2,topic,,%::c4,$chr(40),,%::c1,%::nick,,%::c4,/,$spenAddy($+(,%::c1),$+(,%::c3),%::chan),,%::c4,$chr(41),:,,%::c1) %::text $spenTime
UNotify 04* <c4><nick> <c2>has left IRC<c4>: <c1><text>
Wallop <c4>[<c1>wallop<c4>!<c2><nick><c4>] <c1><text>

; ++ Non-IRC Events
DNS !script %:echo 03! $+(,%::c2,Looking) up $+(,%::c1,$iif(%::nick,%::nick,$spenAddy($+(,%::c1),03,%::address)),,%::c4,...)
DNSError !script %:echo 03! $+(,%::c2,Unable) to resolve $iif(%::nick,$+(,%::c1,%::nick),$spenAddy($+(,%::c1),03,%::address)
DNSResolve !script %:echo 03! $+(,%::c2,Resolved) $spenAddy($+(,%::c1),$+(3),%::iaddress) $+(,%::c2,to) $spenAddy($+(,%::c1),$+(3),%::naddress)
Echo <pre> <c2><text>
EchoTarget <pre> <c2><text>
Error <c4>[<c3>!<c4>] <c2>Error<c4>: <c1><text>

; ++ Raws
RAW.001 !script return
RAW.002 !script return
RAW.003 !script return
RAW.005 !script return
RAW.221 <pre> <c2>Usermode<c4>:<c1> <modes>
RAW.324 !script if (%::modes != +) %:echo %::pre $+(,%::c2,Mode,,%::c4,:) $+(,%::c1,%::modes) | else return
RAW.329 !script return
RAW.332 <pre> <c2>Topic<c4>: <c1><text>
RAW.333 !script %:echo %::pre $+(,%::c2,Setby,,%::c4,:) $+(,%::c1,%::nick) $+(,%::c4,$chr(40),,%::c2,$gettok($asctime(%::text),1,58),,%::c4,h,,%::c2,$gettok($asctime(%::text),2,58),,%::c4,m,,%::c2,$gettok($asctime(%::text),3,58),,%::c4,$chr(41))
RAW.341 <pre> <c1><nick> <c2>was invited to <c3><chan>
RAW.372  <text>
RAW.375 !script return
RAW.376 !script return
RAW.391 <pre> <c2>Server Time<c4>: <c1><text>
RAW.401 <c4>[<c3>!<c4>] <c2>Error<c4>: <c1>No such nickname <c4>(<c2><nick><c4>)<c1>.
RAW.403 <c4>[<c3>!<c4>] <c2>Error<c4>: <c1>No such channel <c4>(<c2><chan><c4>)<c1>.
RAW.404 <c4>[<c3>!<c4>] <c2>Error<c4>: <c1>Unable to send message to "<c2><chan><c1>".
RAW.421 <c4>[<c3>!<c4>] <c2>Error<c4>: <c1>Bad command <c4>(<c2><value><c4>)<c1>.
RAW.433 <c4>[<c3>!<c4>] <c2>Error<c4>: <c1>Nickname in use <c4>(<c2><nick><c4>)<c1>.
RAW.471 <c4>[<c3>!<c4>] <c2>Error<c4>: <c1>Cannot join "<c2><chan><c1>" <c4>(<c1>+l<c4>)<c1>.
RAW.473 <c4>[<c3>!<c4>] <c2>Error<c4>: <c1>Cannot join "<c2><chan><c1>" <c4>(<c1>+i<c4>)<c1>.
RAW.474 <c4>[<c3>!<c4>] <c2>Error<c4>: <c1>Cannot join "<c2><chan><c1>" <c4>(<c1>+b<c4>)<c1>.
RAW.475 <c4>[<c3>!<c4>] <c2>Error<c4>: <c1>Cannot join "<c2><chan><c1>" <c4>(<c1>+k<c4>)<c1>.
RAW.482 <c4>[<c3>!<c4>] <c2>Error<c4>: <c1>Not opped in "<c2><chan><c1>".
RAW.Other <pre> <c1><text>.

; ++ Names
RAW.353 !script return
RAW.366 !script spenNames

; ++ Whois
RAW.301
RAW.307
RAW.311
RAW.312
RAW.313
RAW.314
RAW.317
RAW.318
RAW.319
RAW.369
Whois !script spenWhois
Whowas !script spenWhois

[scheme1]
Colors 01,15,15,07,14,14,15,15,15,15,15,14,15,15,14,00,15,15,15,15,15,01,00,01,00,15,14,01
RGBColors 255,255,255 52,52,52 0,64,128 0,128,0 255,128,128 255,0,0 160,0,160 255,155,0 255,255,128 128,255,128 0,144,144 128,255,255 0,128,255 128,128,255 175,175,175 220,220,220
BaseColors 15,14,07,00

CLineOwner 00
CLineOP 00
CLineHOP 15
CLineVoice 15
CLineRegular 14