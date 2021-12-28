export default function Payment() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Intruksi Pembayaran
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Transfer uang dengan nominal dan nomor rekening berikut ini
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Nominal</dt>
            <dd className="mt-1 text-sm text-gray-900">Rp XX0.000,-</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Nama Bank</dt>
            <dd className="mt-1 text-sm text-gray-900">Jago (Bank Artos)</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Kode Bank</dt>
            <dd className="mt-1 text-sm text-gray-900">542</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Nomor Rekening
            </dt>
            <dd className="mt-1 text-sm text-gray-900">5041 7623 2889</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Nama Penerima</dt>
            <dd className="mt-1 text-sm text-gray-900">Zain Fathoni</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">
              Instruksi Konfirmasi
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              Setelah melakukan transfer, simpan bukti transfer dalam bentuk
              file gambar atau PDF, lalu klik tombol{' '}
              <strong>Konfirmasi Pembayaran</strong> di bawah ini.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
