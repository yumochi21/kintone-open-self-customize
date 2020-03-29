(() => {
  kintone.events.on([
    'app.record.index.show',
    'app.record.index.edit.submit',
    'app.record.index.edit.submit.success',
    'app.record.index.edit.show',
    'app.record.index.delete.submit',
    'app.record.create.show',
    'app.record.create.submit',
    'app.record.create.submit.success',
    'app.record.detail.show',
    'app.record.detail.delete.submit',
    'app.record.detail.process.proceed',
    'app.record.edit.show',
    'app.record.edit.submit',
    'app.record.edit.submit.success',
    'app.record.print.show',
    'app.report.show',
    'portal.show',
  ], () => {
    window.setTimeout(() => {
      $('a[target="_blank"]').attr('target', '_self');
    }, 1000);
  });
})();

$(window).on('load', () => {
  window.setTimeout(() => {
    $('a[target="_blank"]').attr('target', '_self');
  }, 1000);
});