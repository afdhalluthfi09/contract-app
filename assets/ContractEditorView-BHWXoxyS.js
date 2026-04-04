import{C as e,G as t,O as n,T as r,W as i,b as a,c as o,f as s,g as c,h as l,k as u,l as d,m as f,p,u as m,w as h}from"./useAuth-FMRORPLH.js";import{n as ee}from"./index-uCMRM6NH.js";import{n as te,t as ne}from"./SignatureCanvas-idzmNs-V.js";import{n as re}from"./useContract-OPijGBLN.js";var ie={class:`min-h-screen bg-gray-50 p-4`},ae={key:0,class:`text-center py-20 text-gray-400`},oe={key:1,class:`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6`},se={class:`bg-white rounded-2xl shadow p-6 space-y-4 h-fit sticky top-4`},g={class:`flex items-center justify-between mb-2`},_={class:`block text-xs text-gray-500 mb-1`},v=[`onUpdate:modelValue`,`onChange`],y={class:`border border-blue-200 rounded-xl p-4 bg-blue-50 space-y-3`},b={class:`text-xs text-gray-500 w-32 shrink-0`},x={class:`relative flex-1`},S=[`value`,`onChange`],C={class:`p-3 bg-blue-50 rounded-lg border border-blue-200`},w={class:`flex gap-2`},T=[`value`],E={class:`p-3 bg-indigo-50 rounded-lg border border-indigo-200`},D={class:`flex gap-2`},O=[`value`],k={class:`flex items-center justify-between pt-2 border-t`},A={class:`pt-2 border-t`},j={class:`pt-2 border-t`},M={key:0,class:`text-center`},N=[`src`],P={key:1,class:`h-20 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-400 text-sm`},F={class:`bg-white rounded-2xl shadow overflow-hidden`},ce={class:`bg-gray-800 px-4 py-2 flex items-center justify-between sticky top-0 z-10`},I={class:`bg-gray-200 p-3 overflow-x-auto`},L={id:`documentToPrint`,class:`bg-white shadow-sm mx-auto`,style:{width:`100%`,"max-width":`210mm`,"min-height":`297mm`,padding:`15mm`}},R={__name:`ContractEditorView`,setup(R){let z=o(),B=d(),{contract:V,loading:H,save:U,saveDevSignature:W}=re(z.params.id),G=n(!1),K=n(!1),q=s(()=>V.value||{}),J=()=>{let e=`/contract-app/`;return e.endsWith(`/`)?e:e+`/`},Y=s(()=>V.value?`${window.location.origin}${J()}sign/${V.value.shareToken}`:``),X=s(()=>V.value?`${window.location.origin}${J()}welcome/${V.value.welcomeToken}`:``),le=[{key:`nomorSurat`,label:`Nomor Surat`},{key:`namaKlien`,label:`Nama Klien`},{key:`jabatanKlien`,label:`Jabatan Klien`},{key:`namaDev`,label:`Nama Developer`},{key:`alamatDev`,label:`Alamat Developer`},{key:`alamatKlien`,label:`Alamat Klien`},{key:`hari`,label:`Hari`},{key:`tanggal`,label:`Tanggal`},{key:`bulan`,label:`Bulan`},{key:`tahun`,label:`Tahun`},{key:`lokasi`,label:`Lokasi / Kota`},{key:`jangkaWaktu`,label:`Masa Berlaku`},{key:`tier1`,label:`Tier 1 — Teks Display (contoh: Rp 200.000 - Rp 350.000)`},{key:`tier2`,label:`Tier 2 — Teks Display`},{key:`tier3`,label:`Tier 3 — Teks Display`},{key:`tier4`,label:`Tier 4 — Teks Display`},{key:`paket`,label:`Paket Retainer — Teks Display`},{key:`namaBank`,label:`Nama Bank`},{key:`noRek`,label:`No. Rekening`},{key:`atasNama`,label:`Atas Nama`},{key:`pengadilan`,label:`Pengadilan Negeri`}],ue=[{key:`tier1`,label:`Tier 1 (Trivial)`},{key:`tier2`,label:`Tier 2 (Minor)`},{key:`tier3`,label:`Tier 3 (Major)`},{key:`tier4`,label:`Tier 4 (Critical)`},{key:`monitoring`,label:`Biaya Monitoring`}],de=s(()=>V.value?.tierHarga??{tier1:2e5,tier2:4e5,tier3:1e6,tier4:25e5,monitoring:4e5});async function Z(e){await U({[e]:q.value[e]})}async function fe(e,t){await U({[`tierHarga.${e}`]:Number(t)})}async function pe(){await navigator.clipboard.writeText(Y.value),G.value=!0,setTimeout(()=>G.value=!1,2e3)}async function me(){await navigator.clipboard.writeText(X.value),K.value=!0,setTimeout(()=>K.value=!1,2e3)}async function he(e){await W(e)}let Q=s(()=>({draft:`Draft`,waiting_sign:`Menunggu TTD`,completed:`Selesai ✓`})[V.value?.status]||`-`),$=s(()=>({draft:`bg-gray-100 text-gray-600`,waiting_sign:`bg-yellow-100 text-yellow-700`,completed:`bg-green-100 text-green-700`})[V.value?.status]);async function ge(){let e=document.getElementById(`documentToPrint`).innerHTML,t=V.value?.namaKlien??`Klien`,n=V.value?.nomorSurat??``;V.value?.namaDev;let r=window.open(``,`_blank`);r.document.write(`
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
  `),r.document.close(),r.onload=()=>{r.focus(),r.print(),r.close()}}return(n,o)=>(e(),c(`div`,ie,[u(H)?(e(),c(`div`,ae,`Memuat kontrak...`)):(e(),c(`div`,oe,[p(`div`,se,[p(`div`,g,[o[1]||=p(`h2`,{class:`font-bold text-gray-800`},`Edit Kontrak`,-1),p(`button`,{onClick:o[0]||=e=>u(B).back(),class:`text-sm text-gray-400 hover:text-gray-600`},`← Kembali`)]),(e(),c(m,null,h(le,e=>p(`div`,{key:e.key},[p(`label`,_,t(e.label),1),r(p(`input`,{"onUpdate:modelValue":t=>q.value[e.key]=t,onChange:t=>Z(e.key),class:`w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400`},null,40,v),[[ee,q.value[e.key]]])])),64)),p(`div`,y,[o[3]||=p(`p`,{class:`text-xs font-semibold text-blue-700`},` Harga Minimum Tier (kalkulasi paket otomatis) `,-1),o[4]||=p(`p`,{class:`text-xs text-blue-400`},` Angka ini dipakai menghitung nilai paket monthly di Welcome Packet. Berbeda dari teks display di atas. `,-1),(e(),c(m,null,h(ue,e=>p(`div`,{key:e.key,class:`flex items-center gap-2`},[p(`label`,b,t(e.label),1),p(`div`,x,[o[2]||=p(`span`,{class:`absolute left-2 top-2 text-xs text-gray-400`},`Rp`,-1),p(`input`,{type:`number`,value:de.value[e.key],onChange:t=>fe(e.key,t.target.value),class:`w-full border rounded-lg pl-8 pr-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400`},null,40,S)])])),64))]),p(`div`,C,[o[5]||=p(`p`,{class:`text-xs text-blue-700 font-medium mb-2`},` 🔏 Link TTD Kontrak untuk klien: `,-1),p(`div`,w,[p(`input`,{value:Y.value,readonly:``,class:`flex-1 text-xs border rounded p-2 bg-white text-gray-600`},null,8,T),p(`button`,{onClick:pe,class:`text-xs bg-blue-600 text-white px-3 rounded-lg hover:bg-blue-700 transition`},t(G.value?`✓`:`Copy`),1)])]),p(`div`,E,[o[6]||=p(`p`,{class:`text-xs text-indigo-700 font-medium mb-2`},` 📄 Link Welcome Packet untuk klien: `,-1),p(`div`,D,[p(`input`,{value:X.value,readonly:``,class:`flex-1 text-xs border rounded p-2 bg-white text-gray-600`},null,8,O),p(`button`,{onClick:me,class:`text-xs bg-indigo-600 text-white px-3 rounded-lg hover:bg-indigo-700 transition`},t(K.value?`✓`:`Copy`),1)])]),p(`div`,k,[o[7]||=p(`span`,{class:`text-xs text-gray-500`},`Status kontrak`,-1),p(`span`,{class:i([$.value,`text-xs font-medium px-3 py-1 rounded-full`])},t(Q.value),3)]),p(`div`,A,[o[8]||=p(`h3`,{class:`text-sm font-semibold text-gray-700 mb-3`},`Tanda Tangan Developer (Kamu)`,-1),a(ne,{"existing-signature":u(V)?.signature_dev,"signer-name":u(V)?.namaDev||`Developer`,locked:!!u(V)?.signature_dev,onSave:he},null,8,[`existing-signature`,`signer-name`,`locked`])]),p(`div`,j,[o[10]||=p(`h3`,{class:`text-sm font-semibold text-gray-700 mb-3`},`Tanda Tangan Klien`,-1),u(V)?.signature_klien?(e(),c(`div`,M,[p(`img`,{src:u(V).signature_klien,class:`max-h-20 mx-auto`},null,8,N),o[9]||=p(`p`,{class:`text-xs text-green-600 mt-2`},`✓ Klien sudah menandatangani`,-1)])):(e(),c(`div`,P,` Menunggu TTD klien... `))]),u(V)?.status===`completed`?(e(),c(`button`,{key:0,onClick:ge,class:`w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition`},` ↓ Download PDF Kontrak `)):l(``,!0)]),p(`div`,F,[p(`div`,ce,[o[11]||=p(`span`,{class:`text-white text-sm font-mono`},`Preview Kontrak`,-1),p(`span`,{class:i([$.value,`text-xs font-bold px-2 py-0.5 rounded`])},t(Q.value),3)]),p(`div`,I,[p(`div`,L,[u(V)?(e(),f(te,{key:0,c:u(V)},null,8,[`c`])):l(``,!0)])])])]))]))}};export{R as default};