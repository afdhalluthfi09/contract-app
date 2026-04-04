import{C as e,G as t,O as n,T as r,W as i,b as a,c as o,f as s,g as c,h as l,k as u,l as d,m as ee,p as f,u as p,w as m}from"./useAuth-FMRORPLH.js";import{n as te}from"./index-Cf08ZngP.js";import{n as ne,t as re}from"./SignatureCanvas-BoE4V7Sy.js";import{n as ie}from"./useContract-ButxKHAu.js";var ae={class:`min-h-screen bg-gray-50 p-4`},oe={key:0,class:`text-center py-20 text-gray-400`},se={key:1,class:`max-w-5xl mx-auto`},ce={class:`flex md:hidden mb-4 bg-white rounded-xl shadow overflow-hidden`},le={class:`grid grid-cols-1 md:grid-cols-2 gap-6`},h={class:`flex items-center justify-between mb-2`},g={class:`block text-xs text-gray-500 mb-1`},_=[`onUpdate:modelValue`,`onChange`],v={class:`border border-blue-200 rounded-xl p-4 bg-blue-50 space-y-3`},y={class:`text-xs text-gray-500 w-32 shrink-0`},b={class:`relative flex-1`},x=[`value`,`onChange`],S={class:`p-3 bg-blue-50 rounded-lg border border-blue-200`},C={class:`flex gap-2`},w=[`value`],T={class:`p-3 bg-indigo-50 rounded-lg border border-indigo-200`},E={class:`flex gap-2`},D=[`value`],O={class:`flex items-center justify-between pt-2 border-t`},k={class:`pt-2 border-t`},A={class:`pt-2 border-t`},j={key:0,class:`text-center`},M=[`src`],N={key:1,class:`h-20 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-400 text-sm`},P={key:0,class:`text-xs text-gray-400 text-center`},F={class:`bg-gray-800 px-4 py-2 flex items-center justify-between sticky top-0 z-10`},I={class:`bg-gray-200 p-3 overflow-x-auto`},L={id:`documentToPrint`,class:`bg-white shadow-sm mx-auto`,style:{width:`100%`,"max-width":`210mm`,"min-height":`297mm`,padding:`clamp(12px, 4vw, 15mm)`}},R={__name:`ContractEditorView`,setup(R){let ue=o(),z=d(),{contract:B,loading:V,save:H,saveDevSignature:U}=ie(ue.params.id),W=n(`form`),G=n(!1),K=n(!1),q=s(()=>B.value||{}),J=()=>{let e=`/contract-app/`;return e.endsWith(`/`)?e:e+`/`},Y=s(()=>B.value?`${window.location.origin}${J()}sign/${B.value.shareToken}`:``),X=s(()=>B.value?`${window.location.origin}${J()}welcome/${B.value.welcomeToken}`:``),de=[{key:`nomorSurat`,label:`Nomor Surat`},{key:`namaKlien`,label:`Nama Klien`},{key:`jabatanKlien`,label:`Jabatan Klien`},{key:`namaDev`,label:`Nama Developer`},{key:`alamatDev`,label:`Alamat Developer`},{key:`alamatKlien`,label:`Alamat Klien`},{key:`hari`,label:`Hari`},{key:`tanggal`,label:`Tanggal`},{key:`bulan`,label:`Bulan`},{key:`tahun`,label:`Tahun`},{key:`lokasi`,label:`Lokasi / Kota`},{key:`jangkaWaktu`,label:`Masa Berlaku`},{key:`tier1`,label:`Tier 1 — Teks Display`},{key:`tier2`,label:`Tier 2 — Teks Display`},{key:`tier3`,label:`Tier 3 — Teks Display`},{key:`tier4`,label:`Tier 4 — Teks Display`},{key:`paket`,label:`Paket Retainer — Teks Display`},{key:`namaBank`,label:`Nama Bank`},{key:`noRek`,label:`No. Rekening`},{key:`atasNama`,label:`Atas Nama`},{key:`pengadilan`,label:`Pengadilan Negeri`}],fe=[{key:`tier1`,label:`Tier 1 (Trivial)`},{key:`tier2`,label:`Tier 2 (Minor)`},{key:`tier3`,label:`Tier 3 (Major)`},{key:`tier4`,label:`Tier 4 (Critical)`},{key:`monitoring`,label:`Biaya Monitoring`}],pe=s(()=>B.value?.tierHarga??{tier1:2e5,tier2:4e5,tier3:1e6,tier4:25e5,monitoring:4e5});async function me(e){await H({[e]:q.value[e]})}async function he(e,t){await H({[`tierHarga.${e}`]:Number(t)})}async function Z(){await navigator.clipboard.writeText(Y.value),G.value=!0,setTimeout(()=>G.value=!1,2e3)}async function ge(){await navigator.clipboard.writeText(X.value),K.value=!0,setTimeout(()=>K.value=!1,2e3)}async function _e(e){await U(e)}let Q=s(()=>({draft:`Draft`,waiting_sign:`Menunggu TTD`,completed:`Selesai ✓`})[B.value?.status]||`-`),$=s(()=>({draft:`bg-gray-100 text-gray-600`,waiting_sign:`bg-yellow-100 text-yellow-700`,completed:`bg-green-100 text-green-700`})[B.value?.status]);async function ve(){let e=document.getElementById(`documentToPrint`).innerHTML,t=B.value?.namaKlien??`Klien`,n=B.value?.nomorSurat??``,r=window.open(``,`_blank`);r.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Kontrak — ${t}</title>
        <style>
          @page {
            size: A4;
            margin: 20mm 20mm 25mm 20mm;
            @top-left   { content: ""; }
            @top-center { content: ""; }
            @top-right  { content: ""; }
            @bottom-left {
              content: "Ref: ${n}";
              font-family: Arial, sans-serif;
              font-size: 8pt;
              color: #94a3b8;
            }
            @bottom-center {
              content: "Halaman " counter(page) " dari " counter(pages);
              font-family: Arial, sans-serif;
              font-size: 8pt;
              color: #94a3b8;
            }
            @bottom-right { content: ""; }
          }
          body {
            font-family: Arial, sans-serif;
            color: #000;
            line-height: 1.6;
            font-size: 11pt;
            margin: 0;
          }
          h2, h3, h4 { font-weight: bold; }
          h2 { font-size: 14pt; text-align: center; }
          h3 { font-size: 12pt; }
          h4 { font-size: 11pt; text-align: center; margin-top: 25px; }
          p  { margin: 6px 0; }
          table { border-collapse: collapse; width: 100%; }
          td, th { padding: 10px; }
          ul, ol { margin-top: 5px; margin-bottom: 10px; padding-left: 20px; }
          li { margin-bottom: 4px; }
          hr { border: 0; border-top: 1px solid #000; margin: 20px 0; }
          img { max-height: 90px; max-width: 90%; object-fit: contain; display: block; margin: 0 auto; }
          [style*="page-break-before"] {
            page-break-before: always !important;
            break-before: page !important;
          }
          [style*="page-break-inside"] {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        </style>
      </head>
      <body>${e}</body>
    </html>
  `),r.document.close(),r.onload=()=>{r.focus(),r.print(),r.close()}}return(n,o)=>(e(),c(`div`,ae,[u(V)?(e(),c(`div`,oe,`Memuat kontrak...`)):(e(),c(`div`,se,[f(`div`,ce,[f(`button`,{onClick:o[0]||=e=>W.value=`form`,class:i([W.value===`form`?`bg-blue-600 text-white`:`text-gray-500 hover:bg-gray-50`,`flex-1 py-3 text-sm font-medium transition`])},` Form Edit `,2),f(`button`,{onClick:o[1]||=e=>W.value=`preview`,class:i([W.value===`preview`?`bg-blue-600 text-white`:`text-gray-500 hover:bg-gray-50`,`flex-1 py-3 text-sm font-medium transition`])},` Preview Kontrak `,2)]),f(`div`,le,[f(`div`,{class:i([W.value===`preview`?`hidden md:block`:`block`,`bg-white rounded-2xl shadow p-6 space-y-4 h-fit md:sticky md:top-4`])},[f(`div`,h,[o[3]||=f(`h2`,{class:`font-bold text-gray-800`},`Edit Kontrak`,-1),f(`button`,{onClick:o[2]||=e=>u(z).back(),class:`text-sm text-gray-400 hover:text-gray-600`},`← Kembali`)]),(e(),c(p,null,m(de,e=>f(`div`,{key:e.key},[f(`label`,g,t(e.label),1),r(f(`input`,{"onUpdate:modelValue":t=>q.value[e.key]=t,onChange:t=>me(e.key),class:`w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400`},null,40,_),[[te,q.value[e.key]]])])),64)),f(`div`,v,[o[5]||=f(`p`,{class:`text-xs font-semibold text-blue-700`},` Harga Minimum Tier (kalkulasi paket otomatis) `,-1),o[6]||=f(`p`,{class:`text-xs text-blue-400`},` Angka ini dipakai menghitung nilai paket monthly di Welcome Packet. `,-1),(e(),c(p,null,m(fe,e=>f(`div`,{key:e.key,class:`flex items-center gap-2`},[f(`label`,y,t(e.label),1),f(`div`,b,[o[4]||=f(`span`,{class:`absolute left-2 top-2 text-xs text-gray-400`},`Rp`,-1),f(`input`,{type:`number`,value:pe.value[e.key],onChange:t=>he(e.key,t.target.value),class:`w-full border rounded-lg pl-8 pr-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400`},null,40,x)])])),64))]),f(`div`,S,[o[7]||=f(`p`,{class:`text-xs text-blue-700 font-medium mb-2`},`🔏 Link TTD Kontrak untuk klien:`,-1),f(`div`,C,[f(`input`,{value:Y.value,readonly:``,class:`flex-1 text-xs border rounded p-2 bg-white text-gray-600`},null,8,w),f(`button`,{onClick:Z,class:`text-xs bg-blue-600 text-white px-3 rounded-lg hover:bg-blue-700 transition`},t(G.value?`✓`:`Copy`),1)])]),f(`div`,T,[o[8]||=f(`p`,{class:`text-xs text-indigo-700 font-medium mb-2`},`📄 Link Welcome Packet untuk klien:`,-1),f(`div`,E,[f(`input`,{value:X.value,readonly:``,class:`flex-1 text-xs border rounded p-2 bg-white text-gray-600`},null,8,D),f(`button`,{onClick:ge,class:`text-xs bg-indigo-600 text-white px-3 rounded-lg hover:bg-indigo-700 transition`},t(K.value?`✓`:`Copy`),1)])]),f(`div`,O,[o[9]||=f(`span`,{class:`text-xs text-gray-500`},`Status kontrak`,-1),f(`span`,{class:i([$.value,`text-xs font-medium px-3 py-1 rounded-full`])},t(Q.value),3)]),f(`div`,k,[o[10]||=f(`h3`,{class:`text-sm font-semibold text-gray-700 mb-3`},`Tanda Tangan Developer (Kamu)`,-1),a(re,{"existing-signature":u(B)?.signature_dev,"signer-name":u(B)?.namaDev||`Developer`,locked:!!u(B)?.signature_dev,onSave:_e},null,8,[`existing-signature`,`signer-name`,`locked`])]),f(`div`,A,[o[12]||=f(`h3`,{class:`text-sm font-semibold text-gray-700 mb-3`},`Tanda Tangan Klien`,-1),u(B)?.signature_klien?(e(),c(`div`,j,[f(`img`,{src:u(B).signature_klien,class:`max-h-20 mx-auto`},null,8,M),o[11]||=f(`p`,{class:`text-xs text-green-600 mt-2`},`✓ Klien sudah menandatangani`,-1)])):(e(),c(`div`,N,` Menunggu TTD klien... `))]),u(B)?.status===`completed`?(e(),c(`p`,P,` Saat dialog print muncul, matikan "Headers and footers" untuk hasil terbaik. `)):l(``,!0),u(B)?.status===`completed`?(e(),c(`button`,{key:1,onClick:ve,class:`w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition`},` ↓ Download PDF Kontrak `)):l(``,!0)],2),f(`div`,{class:i([W.value===`form`?`hidden md:block`:`block`,`bg-white rounded-2xl shadow overflow-hidden`])},[f(`div`,F,[o[13]||=f(`span`,{class:`text-white text-sm font-mono`},`Preview Kontrak`,-1),f(`span`,{class:i([$.value,`text-xs font-bold px-2 py-0.5 rounded`])},t(Q.value),3)]),f(`div`,I,[f(`div`,L,[u(B)?(e(),ee(ne,{key:0,c:u(B)},null,8,[`c`])):l(``,!0)])])],2)])]))]))}};export{R as default};